import { Controller, Post, Body, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AuthDto } from './dto/auth.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("signIn")
  signIn(@Body() authDto: AuthDto) {
    return this.usersService.signIn(authDto);
  } 
   
  @Post("signUp") 
  async signUp(@Res() res, @Body() userDto: UserDto) { 
    try {
      const result = await this.usersService.signUp(userDto);
      return res.status(201).send(result);
    } catch (error) {
      return res.status(409).send("This user already exist");
    }
  }  
   
  @Put("changePassword")
  changePassword(@Body() changePasswordDto:ChangePasswordDto) { 
    return this.usersService.changePassword(changePasswordDto);
  } 
}
