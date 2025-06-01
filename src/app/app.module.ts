import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/middleware/middleware';
import { ProductEntity } from 'src/modules/products/entities/product.entity';
import { ProductsModule } from 'src/modules/products/products.module';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { UsersModule } from 'src/modules/users/users.module';
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
      database: process.env.DB_NAME || 'nest-shop',
      entities: [UserEntity, ProductEntity],
      synchronize: true, // нельзя использовать synchronize: true в продакшене!
    }),
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
