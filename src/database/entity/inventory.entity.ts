import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Inventory {
    @OneToOne(() => Product)
    @JoinColumn()
    product!: Product;

    @Column()
    quantity!: number;
}