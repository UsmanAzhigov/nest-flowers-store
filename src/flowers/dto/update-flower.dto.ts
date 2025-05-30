import { PartialType } from '@nestjs/mapped-types';
import { CreateFlowerDto } from './create-flower.dto';

export class UpdateFlowerDto extends PartialType(CreateFlowerDto) {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
