import { DataSource } from "typeorm";
import { config } from "../config";

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    synchronize: true,
    entities: ['src/**/*.entity.ts'],
})