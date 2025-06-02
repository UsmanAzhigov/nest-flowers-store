import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../types/type.category";
import { Color } from "../types/type.color";
import { Size } from "../types/type.size";

export class CreateProductDto {
   @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Название товара' })
  name: string = 'Название товара';

  @IsString()
  @ApiProperty({ description: 'Описание товара' })
  description: string = 'Описание товара';

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Цена товара' })
  price: number = 100;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Количество товара' })
  quantity: number = 10;

  @ApiProperty({
    description: 'Изображение товара',
    type: 'string',
    format: 'binary'
  })
  image: Express.Multer.File;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Категория товара' })
  category: Category = Category.ELECTRONICS;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Цвет товара' })
  color: Color = Color.RED;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Размер товара' })
  size: Size = Size.S;
}
