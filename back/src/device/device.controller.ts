import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from './schemas/device.schema';
import { UpdateDeviceDto } from './dto/update.device.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('devices')
export class DeviceController {
    constructor(private deviceService: DeviceService){}
     @Get()
     async getAllDevices(@Query()query:ExpressQuery):Promise <Device[]>{
        return this.deviceService.findAll(query);
     }


     @Post()
     @UseGuards(AuthGuard())
     async createDevices(
        @Body()
        device,
        @Req() req ,
     ):Promise<Device>{
      console.log(req.user)
        return this.deviceService.create(device);
     }


     @Get(':id')
     async getDevice(
        @Param('id')
        id:string
     ):Promise <Device>{
        return this.deviceService.findById(id);
     }



     @Put (':id')
     async updateDevice(
        @Param('id')
        id:string,
        @Body()
        device: UpdateDeviceDto,
     ):Promise <Device>{
        return this.deviceService.UpdateById(id,device)
     }


     @Delete(':id')
     async deleteDevice(
        @Param('id')
        id:string,
     ): Promise <Device>{
        return this.deviceService.deleteById(id);
     }


}



