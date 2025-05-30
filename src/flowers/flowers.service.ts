import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { Flower } from './entities/flower.entity';

@Injectable()
export class FlowersService {
  constructor(
    @InjectRepository(Flower)
    private flowersRepository: Repository<Flower>,
  ) {}

  create(createFlowerDto: CreateFlowerDto): Promise<Flower> {
    const flower = this.flowersRepository.create(createFlowerDto);
    return this.flowersRepository.save(flower);
  }

  findAll(): Promise<Flower[]> {
    return this.flowersRepository.find();
  }

  findOne(id: number): Promise<Flower> {
    return this.flowersRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, updateFlowerDto: UpdateFlowerDto): Promise<Flower> {
    await this.flowersRepository.update(id, updateFlowerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.flowersRepository.delete(id);
  }
}
