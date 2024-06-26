import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"



export class LoginDto{
    
    @IsNotEmpty()
    @IsString()
    @IsEmail({},{message:"Please enter correct email"})
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password:string;

    
}