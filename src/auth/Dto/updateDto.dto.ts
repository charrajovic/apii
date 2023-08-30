import {
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class updateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password not matche',
  })
  password: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  age: string;

  @IsString()
  @IsOptional()
  poids: string;

  @IsString()
  @IsOptional()
  taille: string;

  @IsString()
  @IsOptional()
  blessure: string;

  @IsString()
  @IsOptional()
  objectif: string;
}
