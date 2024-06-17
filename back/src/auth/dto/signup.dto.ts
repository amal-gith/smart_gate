import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"



export class SignUpDto{
    
    @IsNotEmpty()
    @IsString()
    @IsEmail({},{message:"Please enter correct email"})
    readonly email:string

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password:string
}