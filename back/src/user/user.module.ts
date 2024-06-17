import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[
  AuthModule,
  MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
  controllers: [UserController],
  exports:[UserService],
  providers: [UserService]
})
export class UserModule {}
