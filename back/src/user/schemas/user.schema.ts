import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { timestamp } from "rxjs";
import { Userlogin } from "../../auth/schemas/userlogin.schema";
import mongoose from "mongoose";
 

@Schema({
    timestamps:true
})
export class User{
    @Prop()
    cin:number;

    @Prop()
    fullname:string;

    @Prop()
    email:string;

    @Prop()
    adresse:string;
     
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Userlogin'})
    userl:Userlogin;
}

export const UserSchema = SchemaFactory.createForClass(User)