import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Request Response Cycle
 * => Controllers responsible for Manage Route Req to Handler
 * Handling Req and return response

 * each controller has more than one route,
 * and different routes can perform different actions.
 */

// Decorators
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
