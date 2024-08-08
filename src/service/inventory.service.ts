import { Service } from "typedi";
import { PostgresDataSource } from "../database/data-source";
import { Inventory } from "../database/entity/inventory.entity";
import { Product } from "../database/entity/product.entity";
import { ProductService } from "./product.service";

@Service()
export class InventoryService {
    private inventoryRepository = PostgresDataSource.getRepository(Inventory);

    constructor(private prodictService: ProductService) {
        console.log('InventoryService created');
    }

    getFullInventory() {
        return this.inventoryRepository.find();
    }

    async transaction(data: { productName: string; quantity: number; }) {
        const product = await this.prodictService.findOrCreate(data.productName);
        if (!product) return null;

        const inventory = await this.getOrCreateInventory(product);
        if (!inventory) return null;

        if (data.quantity < 0 && inventory.quantity < Math.abs(data.quantity)) return null;

        inventory.quantity += data.quantity;

        return this.inventoryRepository.save(inventory);
    }

    getInventoryByID(id: string) {
        return this.inventoryRepository.findOne({ where: { id } });
    }

    createInventory(product: Product, quantity: number) {
        return this.inventoryRepository.insert({ product, quantity }).then((data) => data.identifiers[0]);
    }

    async getOrCreateInventory(product: Product) {
        const inventory = await this.inventoryRepository.findOne({ where: { product } });
        if (inventory) return inventory;

        const { id } = await this.createInventory(product, 0);

        return this.getInventoryByID(id);
    }
} 