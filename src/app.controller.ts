import { AppService} from './app.service'; 
import {UsersService} from './users/users.service'
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor( 
    private readonly appService: AppService,  
    private readonly usersService: UsersService
    ) {} 
}
