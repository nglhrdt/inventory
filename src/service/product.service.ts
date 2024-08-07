import { Service } from "typedi";
import { PostgresDataSource } from "../database/data-source";
import { Product } from "../database/entity/product.entity";
import { FindManyOptions } from "typeorm";

@Service()
export class ProductService {
    private productRepository = PostgresDataSource.getRepository(Product);

    getAllProducts(query?: FindManyOptions<Product>) {
        return this.productRepository.find();
    }

    getProductById(id: string) {
        return this.productRepository.findOne({ where: { id } })
    }

    createProduct(name: string) {
        return this.productRepository.insert({ name }).then((data) => data.identifiers[0]);
    }
}