import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EmailsService } from './email.service';
import { diskStorage } from 'multer';

@Controller('emails')
export class EmailsController {
    constructor(private readonly emailsService: EmailsService) {}
    @Post('')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads'
        , filename: (req, file, cb) => { 
          file.ts = new Date().getTime();
          cb(null, file.ts + file.originalname)
        }
      })
    }))
    async filter(@UploadedFile() file, @Res() res ) {
     return await this.emailsService.filter(file, res); 
    } 
    
}