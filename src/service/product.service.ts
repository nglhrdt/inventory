import { Service } from "typedi";
import { FindManyOptions } from "typeorm";
import { PostgresDataSource } from "../database/data-source";
import { Product } from "../database/entity/product.entity";

@Service()
export class ProductService {
    private productRepository = PostgresDataSource.getRepository(Product);

    getAllProducts(query?: FindManyOptions<Product>) {
        return this.productRepository.find();
    }

    getProductById(id: string) {
        return this.productRepository.findOne({ where: { id } })
    }

    getProductByName(name: string) {
        return this.productRepository.findOne({ where: { name } })
    }

    createProduct(name: string) {
        return this.productRepository.insert({ name }).then((data) => data.identifiers[0]);
    }

    async findOrCreate(productName: string) {
        const existingProduct = this.getProductByName(productName);

        if (existingProduct) return existingProduct;

        const { id } = await this.createProduct(productName);

        return this.getProductById(id);
    }
}