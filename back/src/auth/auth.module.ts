import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserloginSchema } from './schemas/userlogin.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './guards/roles-gurad';
import { JwtAuthGuard } from './guards/jwt-guard';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
  forwardRef(()=>UserModule),
  PassportModule.register({defaultStrategy:'jwt'}),  
  JwtModule.registerAsync({
   inject:[ConfigService],
   useFactory: (config:ConfigService)=>{
    return{
      secret:config.get<string>('JWT_SECRET'),
      signOptions:{
        expiresIn: config.get<string | number>('JWT_EXPIRES'),
      }
    }
   }
  }),
  MongooseModule.forFeature([{name:'Userlogin',schema:UserloginSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy,RolesGuard,JwtAuthGuard,JwtStrategy],
  exports: [JwtStrategy,PassportModule],
})
export class AuthModule {}
