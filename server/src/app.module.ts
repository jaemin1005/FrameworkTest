import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
