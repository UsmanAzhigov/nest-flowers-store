import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Category } from './types/type.category';
import { Color } from './types/type.color';
import { Size } from './types/type.size';


@ApiTags('Товары')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('filter')
  @ApiQuery({ name: 'name', type: String, required: false })
  @ApiQuery({ name: 'category', enum: Category, required: false })
  @ApiQuery({ name: 'color', enum: Color, required: false })
  @ApiQuery({ name: 'size', enum: Size, required: false })
  @ApiQuery({ name: 'price', type: Number, required: false })
  filter(
    @Query('name') name?: string,
    @Query('category') category?: Category,
    @Query('color') color?: Color,
    @Query('size') size?: Size,
    @Query('price') price?: number,
  ) {
    return this.productsService.filter({
      name,
      category,
      color,
      size,
      price,
    });
  }


  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
