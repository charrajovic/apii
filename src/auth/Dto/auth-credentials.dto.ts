import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class authCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    lastname: string;

    @IsString()
    @MinLength(4)
    @MaxLength(40)
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password not matche'
    })
    password: string;

    @IsString()
    @MinLength(1)
    @MaxLength(40)
    gender: string;

    @IsString()
    @MinLength(1)
    @MaxLength(40)
    age: string;

    @IsString()
    @MinLength(1)
    @MaxLength(40)
    poids: string;

    @IsString()
    @MinLength(1)
    @MaxLength(40)
    taille: string;

    @IsString()
    @MaxLength(40)
    blessure: string;

    @IsString()
    @MaxLength(40)
    objectif: string;

    
}