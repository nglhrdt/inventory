import { Service } from "typedi";
import { PostgresDataSource } from "../database/data-source";
import { Inventory } from "../database/entity/inventory.entity";
import { Product } from "../database/entity/product.entity";

@Service()
export class InventoryService {
    private inventoryRepository = PostgresDataSource.getRepository(Inventory);
    private productRepository = PostgresDataSource.getRepository(Product);

    constructor() {
        console.log('InventoryService created');
    }

    createInventory(data: { productName: string; quantity: number; }) {
        throw new Error("Method not implemented.");
    }

    getInventory() {
        return { msg: "Moin" }
    }
} 