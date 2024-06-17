import { IsEmpty, IsNotEmpty } from "class-validator";
import { Userlogin } from "../../auth/schemas/userlogin.schema";

export enum Type{
    HEALTHCARE='healthcare',
    SMARTAGRICULTURE='smartagriculture',
    SMARTLIGHTING='smartlighting',
    INDUSTRIEL='industriel'
} 


export class CreateDeviceDto{
  
    
    @IsNotEmpty()
    readonly id : string; 
     
    
    @IsNotEmpty()
    readonly securite:boolean;



    @IsNotEmpty()
    type:Type;




    @IsEmpty({message : "You cannot pass user id "})
    readonly user:Userlogin






}