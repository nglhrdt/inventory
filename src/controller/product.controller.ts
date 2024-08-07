import { Body, Get, HttpCode, JsonController, OnNull, Param, Post } from "routing-controllers";
import { Container } from "typedi";
import { ProductService } from "../service/product.service";

@JsonController('/products')
export class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = Container.get(ProductService);
    }

    @Get()
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }

    @Get('/:id')
    async getProductById(@Param('id') id: string) {
        const product = await this.productService.getProductById(id); 
        return product;
    }

    @Post()
    @HttpCode(201)
    async createProduct(@Body() data: { name: string }) {
        return await this.productService.createProduct(data.name);
    }
}