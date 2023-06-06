import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  /**
   * To create a Nest application instance
   * The create() method returns an application object, which fulfills the INestApplication interface.
   * This object provides a set of methods
   */
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // By Default Using Express but can changed to Fastify
  await app.listen(3000); // Start On Port 3000 [Using Express HTTP Implementaion]
}
bootstrap();

/**
 * IF A Request Done on a missing route
 * the res will be 404 notfound by default
 * not like node we should handle it
 */
