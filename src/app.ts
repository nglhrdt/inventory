import path from 'path';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { config } from './config';
import { MongoDBDataSource } from './database/data-source';

async function main() {
    await MongoDBDataSource.initialize();
    console.log('Database connected');

    await createExpressServer({
        routePrefix: config.express.routePrefix,
        controllers: [path.join(__dirname + '/controller/*.ts')],
    }).listen(config.express.port);

    console.log(`Server running on port ${config.express.port}`);
}

main().catch(console.error);
