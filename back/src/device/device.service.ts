import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from './schemas/device.schema';
import {Query} from 'express-serve-static-core';
import * as mongoose from 'mongoose';
  

@Injectable()
export class DeviceService {
    constructor (
        @InjectModel(Device.name)
        private deviceModel:mongoose.Model<Device>
    ){}

    async findAll(query: Query): Promise<Device[]> {
        const keyword = query.keyword ? {
            id: {
                $regex: String(query.keyword), // Explicitly cast to string
                $options: 'i'
            }
        } : {};
    
        const devices = await this.deviceModel.find({ ...keyword });
        return devices;
    }
    

    async create (device:Device):Promise<Device>{
        const res = await this.deviceModel.create(device);
        return res;
    }
    
    async findById(id: string): Promise<Device> {
        const device = await this.deviceModel.findOne({ id });
    
        if (!device) {
            throw new NotFoundException('Device not found.');
        }
    
        return device;
    }
    
    
    
/*
  async findById(id: string): Promise<Device> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
        throw new BadRequestException('Please enter a valid ID.');
    }

    const device = await this.deviceModel.findById(id);
     
    if (!device) {
        throw new NotFoundException('Device not found.');
    }

    return device;
}
*/



    async UpdateById(id:string , device:Device):Promise <Device>{
        return this.deviceModel.findByIdAndUpdate(id,device,{
            new : true ,
            runValidators:true,
        });
         
    }



    
    async deleteById(id:string):Promise <Device>{
        return this.deviceModel.findByIdAndDelete(id);
      
    
    }
   
    




}
