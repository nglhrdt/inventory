import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
    express: {
        port: parseInt(process.env.PORT || "3000", 10),
        routePrefix: process.env.ROUTE_PREFIX || "/api/v1",
    },
    mongoDB: {
        host: process.env.MONGODB_HOST || "localhost",
        username: process.env.MONGODB_USERNAME || "",
        password: process.env.MONGODB_PASSWORD || "",
        port: parseInt(process.env.MONGODB_PORT || "27017", 10),
        database: process.env.MONGODB_DATABASE || "inventory",
    }
};
