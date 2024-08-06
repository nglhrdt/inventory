import { Controller, Get } from "routing-controllers";

@Controller('/health-check')
export class HealthCheckController {
    @Get()
    healthCheck() {
        return `Healthy at ${new Date()}`
    }
}