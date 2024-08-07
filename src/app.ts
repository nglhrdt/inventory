import path from 'path';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { MongoDBDataSource } from './database/data-source';
import { config } from './config';

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
