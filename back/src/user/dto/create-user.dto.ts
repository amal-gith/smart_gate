import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Userlogin } from "../../auth/schemas/userlogin.schema"



export class CreateUserDto{
    @IsNotEmpty()
    @IsNumber()
    readonly cin:number

    @IsNotEmpty()
    @IsString()
    readonly fullname:string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email:string

    @IsNotEmpty()
    @IsString()
    readonly adresse:string


    @IsEmpty({message : "You cannot pass user id "})
    readonly userl:Userlogin
}
