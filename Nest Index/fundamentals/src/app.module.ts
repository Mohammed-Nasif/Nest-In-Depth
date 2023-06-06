import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

// Decorators => provides metadata that Nest makes use of to organize the application structure.
@Module({
  imports: [UsersModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
