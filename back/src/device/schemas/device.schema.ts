import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Userlogin } from "../../auth/schemas/userlogin.schema";


export enum Type{
    HEALTHCARE='healthcare',
    SMARTAGRICULTURE='smartagriculture',
    SMARTLIGHTING='smartlighting',
    INDUSTRIEL='industriel'
} 
   



@Schema({
    timestamps:true 
})
export class Device {

  @Prop()
  id:string;

  @Prop()
  securite:boolean;
  
  @Prop()
  type :Type;
  

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Userlogin'})
  user:Userlogin;
}

export const DeviceSchema = SchemaFactory.createForClass(Device)