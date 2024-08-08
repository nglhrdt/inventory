import { Min } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @OneToOne(() => Product)
    @JoinColumn()
    product!: Product;

    @Column()
    @Min(0)
    quantity!: number;
}