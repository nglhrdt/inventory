import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import path from 'path';

createExpressServer({
    routePrefix: '/api/v1',
    controllers: [path.join(__dirname + '/controllers/*.ts')],
}).listen(3000);