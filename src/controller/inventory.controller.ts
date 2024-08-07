import { Body, Get, JsonController, Post } from "routing-controllers";
import Container, { Service } from "typedi";
import { InventoryService } from "../service/inventory.service";

@JsonController('/inventory')
export class InventoryController {
    private inventoryService: InventoryService;

    constructor() {
        console.log('InventoryController created');
        this.inventoryService = Container.get(InventoryService);
    }

    @Get()
    getInventory() {
        return this.inventoryService.getInventory();
    }

    @Post()
    createInventory(@Body({required: true}) body: {productName: string, quantity: number}) {
        return this.inventoryService.createInventory(body);
    }
}