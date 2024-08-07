import { Controller, Get, JsonController } from "routing-controllers";
import { version } from '../../package.json';
import { time } from "console";

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