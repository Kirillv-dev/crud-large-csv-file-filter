import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity'; 
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({ 
  imports: [ SequelizeModule.forFeature([Product]) ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports:[ ProductsService ]
}) 

export class ProductsModule {
  public configure(consumer: MiddlewareConsumer) {
      consumer
          .apply(AuthMiddleware)
          .forRoutes(
              { path: '/products', method: RequestMethod.PUT }, 
              { path: '/products', method: RequestMethod.POST },
              { path: '/products/:id', method: RequestMethod.GET }
          );
  }
}
