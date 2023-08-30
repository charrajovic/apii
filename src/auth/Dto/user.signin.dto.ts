import { IsString, MaxLength, MinLength } from "class-validator";

export class UserCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(40)
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(40)
    password: string;
}