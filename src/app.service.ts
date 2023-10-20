import { MailerService } from '@nest-modules/mailer';
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  async SendMail(regiterDto: RegisterDto) {
    await this.mailerService.sendMail({
      to: regiterDto.email,
      subject: 'hello',
      text: 'test mail',
    });
  }
}
