import { Body, Get, HttpCode, JsonController, Param, Post } from "routing-controllers";
import { ProductService } from "../service/product.service";

@JsonController('/products')
export class ProductController {

    constructor(private productService: ProductService) {
        console.log('ProductController created');
    }

    @Get()
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }

    @Get('/:id')
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(id);
    }

    @Post()
    @HttpCode(201)
    createProduct(@Body() data: { name: string }) {
        return this.productService.createProduct(data.name);
    }
}