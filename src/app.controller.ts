import { Body, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { RegisterDto } from './dto/register.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('send-mail')
  sendMail(@Body() registerDto: RegisterDto) {
    console.log('send');
    return this.appService.SendMail(registerDto);
  }
}
