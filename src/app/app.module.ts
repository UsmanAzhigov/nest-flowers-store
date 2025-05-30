import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/middleware/middleware';
import { Flower } from '../flowers/entities/flower.entity';
import { FlowersModule } from '../flowers/flowers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:  'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'usmanazhigov',
      password: '',
      database: process.env.DB_NAME || 'flowers_store',
      entities: [Flower],
      synchronize: true, // Не используйте synchronize: true в продакшене!
    }),
    FlowersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers');
  }
}
