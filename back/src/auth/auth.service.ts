import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Userlogin } from './schemas/userlogin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';



@Injectable()
export class AuthService {
   
    constructor(
    @InjectModel(Userlogin.name)
    private userloginModel:Model<Userlogin>,
    private jwtService: JwtService
    ){}


    async signUp(signUpDto:SignUpDto) : Promise<{token:string}>{
        const {email,password}=signUpDto

        const hashedPassword= await bcrypt.hash(password,10) 

        const userlogin = await this.userloginModel.create({
            email,
            password:hashedPassword
        })


        const token = this.jwtService.sign({id:userlogin._id})
        return {token}
    }


    async login(loginDto:LoginDto) : Promise<{token:string}> {
        const {email,password}=loginDto;

        const userlogin = await this.userloginModel.findOne({email})

        if (!userlogin){
            throw new UnauthorizedException('Invalid email or password ')
        }

        const isPasswordMatched = await bcrypt.compare(password,userlogin.password)
        
        if (!isPasswordMatched){
            throw new UnauthorizedException('Invalid email or password ')
        }
        
        const token = this.jwtService.sign({id:userlogin._id})
        return {token}




    }
}





 