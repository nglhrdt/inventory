import { DataSource } from "typeorm";
import { config } from "../config";

export const MongoDBDataSource = new DataSource({
    type: "mongodb",
    host: config.mongoDB.host,
    username: config.mongoDB.username,
    password: config.mongoDB.password,
    port: config.mongoDB.port,
    database: config.mongoDB.database,
    useUnifiedTopology: true,
    entities: ["/entity/*.ts"],
    logging: false,
});