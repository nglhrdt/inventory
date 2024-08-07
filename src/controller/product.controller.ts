import { Body, Get, JsonController, Post } from "routing-controllers";
import { Container } from "typedi";
import { ProductService } from "../service/product.service";
import { FindManyOptions } from "typeorm";
import { Product } from "../database/entity/product.entity";

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
    async getProductById(id: number) {
        return await this.productService.getProductById(id);
    }

    @Get('/search/:query')
    async searchProduct(query?: FindManyOptions<Product>) {
        return await this.productService.searchProduct(query);
    }

    @Post()
    async createProduct(@Body() data: {name: string}) {
        return await this.productService.createProduct(data.name);
    }
}