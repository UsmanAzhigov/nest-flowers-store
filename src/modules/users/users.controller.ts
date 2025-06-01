import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiBody({
    type: CreateUserDto,
    description: 'Данные для создания пользователя',
    examples: {
      user: {
        value: new CreateUserDto()
      }
    }
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение всех пользователей' })
  findAll() {
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение пользователя по ID' })
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление пользователя по ID' })
  @ApiBody({
    type: UpdateUserDto,
    description: 'Данные для обновления пользователя',
    examples: {
      user: {
        value: new UpdateUserDto()
      }
    }
  })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление пользователя по ID' })
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}

