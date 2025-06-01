import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { Category } from './types/type.category';
import { Color } from './types/type.color';
import { Size } from './types/type.size';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productsRepository.save(createProductDto);
  }

  findAll() {
    return this.productsRepository.find()
  }

  findOne(id: number) {
    return  this.productsRepository.findOne({where: { id }});
  }

  filter(filter: {name?: string, size?: Size, color?: Color, price?: number, category?: Category}) {
    if (filter.size && !Object.values(Size).includes(filter.size)) {
      throw new Error('Неверное значение размера');
    }

    if (filter.color && !Object.values(Color).includes(filter.color)) {
      throw new Error('Неверное значение цвета');
    }

    if (filter.category && !Object.values(Category).includes(filter.category)) {
      throw new Error('Неверное значение категории');
    }


    return this.productsRepository.find({where: filter});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
  }
}
