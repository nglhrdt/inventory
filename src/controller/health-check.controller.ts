import { Get, JsonController } from "routing-controllers";
import { version } from '../../package.json';

@JsonController('/health-check')
export class HealthCheckController {
    @Get()
    healthCheck() {
        return {
            status: 'ok',
            version,
            timestamp: new Date().toISOString(),
        }
    }
}