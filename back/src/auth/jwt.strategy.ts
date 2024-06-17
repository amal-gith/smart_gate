import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";
import { Userlogin } from "./schemas/userlogin.schema";
import {Model} from "mongoose";




@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(Userlogin.name)
        private userModel: Model<Userlogin>
    ){
     super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey : process.env.JWT_SECRET
     })
    }
    async validate(payload) {
        const { id } = payload;
        const userlogin = await this.userModel.findById(id)
        if (!userlogin){
            throw new UnauthorizedException('Login First to access this endpoint .')
        }
        return userlogin
    }
}