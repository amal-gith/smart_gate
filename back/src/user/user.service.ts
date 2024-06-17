import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as mongoose from 'mongoose';
import {Query} from 'express-serve-static-core';
import { Userlogin } from '../auth/schemas/userlogin.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel:mongoose.Model<User>
    ){}
    
    async findAll(query: Query): Promise<User[]> {
        const keyword = query.keyword ? {
            cin: query.keyword // Supposons que le mot-clé est un nombre à chercher
        } : {};
    
        const users = await this.userModel.find({ ...keyword });
        return users;
    }
    

    async create(user:User , userl:Userlogin ):Promise<User>{

       const data = Object.assign(user,{userl:userl._id});

        const res = await this.userModel.create(data);
        return res ;
    }

/*
    async findById(id:string):Promise<User>{

        const isValidId=mongoose.isValidObjectId(id)
        

        if(!isValidId){
            throw new BadRequestException('Please enter correct id ');
        }
    



        const user = await this.userModel.findById(id);


        if(!user){
            throw new NotFoundException('User not found.')
        }
        return user ;
    }
*/
    
    async findById(cin: string): Promise<User> {
        const user = await this.userModel.findOne({ cin });
    
        if (!user) {
            throw new NotFoundException('user not found.');
        }
    
        return user;
    }
    

    

 
    async updateById(id:string , user:User):Promise<User>{
        return await this.userModel.findByIdAndUpdate(id,user,{
            new:true,
            runValidators:true,
        });
       
    }



    async deleteById(id:string ):Promise<User>{
        return await this.userModel.findByIdAndDelete(id);
       
    }
   



}



