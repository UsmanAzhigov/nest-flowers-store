import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flower } from './entities/flower.entity';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Flower])],
  controllers: [FlowersController],
  providers: [FlowersService],
})
export class FlowersModule {}
