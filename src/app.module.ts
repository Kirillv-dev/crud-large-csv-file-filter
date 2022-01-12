import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { EmailsController } from './email/email.controller';
import { EmailsService } from './email/email.service';  
import * as config from 'config';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: config.get("database.dialect"),
      host:  config.get("database.host"),
      port: config.get("database.port"),
      username: config.get("database.username"),
      password: config.get("database.password"),
      database: config.get("database.database"),
    autoLoadModels: true,
    synchronize: true,
    models: [User], 
    define: {timestamps:true}
  }), 
  UsersModule,
  ProductsModule
],
  controllers: [AppController, EmailsController],
  providers: [AppService, EmailsService],
})
export class AppModule {}