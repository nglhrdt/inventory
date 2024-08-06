import path from 'path';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';

createExpressServer({
    routePrefix: '/api/v1',
    controllers: [path.join(__dirname + '/controller/*.ts')],
}).listen(3000);