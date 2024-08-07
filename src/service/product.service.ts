import { Service } from "typedi";
import { PostgresDataSource } from "../database/data-source";
import { Product } from "../database/entity/product.entity";
import { FindManyOptions } from "typeorm";

@Service()
export class ProductService {
    private productRepository = PostgresDataSource.getRepository(Product);

    createProduct(name: string) {
        return this.productRepository.insert({ name });
    }

    searchProduct(query?: FindManyOptions<Product>) {
        return this.productRepository.find(query)
    }

    getProductById(id: number) {
        return this.productRepository.findOneOrFail({ where: { id } })
    }

    getAllProducts(query?: FindManyOptions<Product>) {
        return this.productRepository.find();
    }

}