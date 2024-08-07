import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
    app: {
        port: parseInt(process.env.PORT || "3000", 10),
        routePrefix: process.env.ROUTE_PREFIX || "/api/v1",
    },
    database: {
        host: process.env.POSTGRES_HOST || "localhost",
        username: process.env.POSTGRES_USERNAME || "",
        password: process.env.POSTGRES_PASSWORD || "",
        port: parseInt(process.env.POSTGRES_PORT || "5432", 10),
        database: process.env.POSTGRES_DATABASE || "inventory",
    }
};
