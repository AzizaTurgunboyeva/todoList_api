import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
     readonly username:string
    @IsEmail()
    readonly email:string
    password:string
}
