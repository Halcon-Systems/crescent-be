import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  cnic: string;

  @IsNotEmpty()
  @IsString()
  irNo: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}
