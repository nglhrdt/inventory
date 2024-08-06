import { Get, JsonController } from "routing-controllers";

@JsonController('/health-check')
export class HealthCheckController {
    @Get()
    get() {
        return { msg: `Healthy at ${new Date()}` }
    }
}