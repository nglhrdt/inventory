import { Service } from "typedi";
import { PostgresDataSource } from "../database/data-source";
import { Product } from "../database/entity/product.entity";

@Service()
export class ProductService {
    private productRepository = PostgresDataSource.getRepository(Product);

    createProduct(name: string) {
        return this.productRepository.insert({ name });
    }

    searchProduct(query: string) {
        throw new Error("Method not implemented.");
    }

    getProductById(id: number) {
        throw new Error("Method not implemented.");
    }

    getAllProducts() {
        return this.productRepository.find();
    }

}