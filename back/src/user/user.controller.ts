import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import {User} from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles-gurad';

@Controller('users')
export class UserController {
  constructor(private userService:UserService){}



  @hasRoles('Admin')
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Get()
  async getAllUsers(@Query()query:ExpressQuery):Promise<User[]>{
    return this.userService.findAll(query);
  }
    
   @Post()
   @UseGuards(AuthGuard())
   async creatUser(
    @Body()
    user: CreateUserDto,
    @Req() req 
   ):Promise<User>{
    console.log(req.user);
   return this.userService.create(user,req.userl );
   } 

  
   @Get(':id')
   async getUsers(
    @Param('id')
    id:string,
   ):Promise<User>{
     return this.userService.findById(id);
   }

  
   @Put(':id')
   async updateser(
    @Param('id')
    id:string,
    @Body()
    user: UpdateUserDto,
   ):Promise<User>{
   return this.userService.updateById(id,user)
   } 


   @Delete(':id')
   async deleteUser(
    @Param('id')
    id:string,
   ):Promise<User>{
     return this.userService.deleteById(id);
   }





}




