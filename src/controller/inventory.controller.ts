import { Body, Get, JsonController, Post } from "routing-controllers";
import { Service } from "typedi";
import { InventoryService } from "../service/inventory.service";

@JsonController('/inventory')
@Service()
export class InventoryController {

    constructor(private inventoryService: InventoryService) {
        console.log('InventoryController created');
    }

    @Get()
    getInventory() {
        return this.inventoryService.getFullInventory();
    }

    @Post('/transaction')
    transaction(@Body({ required: true }) body: { productName: string, quantity: number }) {
        return this.inventoryService.transaction(body);
    }
}