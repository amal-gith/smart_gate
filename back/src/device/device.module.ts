import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceSchema } from './schemas/device.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([{name:'Device',schema:DeviceSchema}])],
  providers: [DeviceService],
  controllers: [DeviceController]
})
export class DeviceModule {}
