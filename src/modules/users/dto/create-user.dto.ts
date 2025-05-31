import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator";

 export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string = 'John';

  @IsString()
  @IsNotEmpty()
  lastName: string = 'Doe';

  @IsEmail()
  @IsNotEmpty()
  email: string = 'john.doe@example.com';

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string = 'password';

  @IsString()
  @IsNotEmpty()
  address: string = '123 Main St';

  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string = '+1234567890';
 }
