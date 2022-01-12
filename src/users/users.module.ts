
import { Module, RequestMethod } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service'; 
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  imports: [ SequelizeModule.forFeature([User]) ],
  controllers: [ UsersController ],  
  providers: [ UsersService ], 
  exports:[ UsersService ]
})  

export class UsersModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(  
                { path: '/users/changePassword', method: RequestMethod.PUT },
            );
    }
}