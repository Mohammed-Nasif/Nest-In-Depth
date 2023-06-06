import { Injectable } from '@nestjs/common';

// Decorators
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
