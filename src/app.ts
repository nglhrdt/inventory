import path from 'path';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { config } from './app/config';
import { PostgresDataSource } from './database/data-source';

async function main() {
    console.log('Connecting to database');
    await PostgresDataSource.initialize();
    console.log('Database connected');

    await createExpressServer({
        routePrefix: config.app.routePrefix,
        controllers: [path.join(__dirname + '/controller/*.ts')],
    }).listen(config.app.port);

    console.log(`Server running on port ${config.app.port}`);
}

main().catch(console.error);
