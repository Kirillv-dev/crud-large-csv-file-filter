import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(@Body() productDto: ProductDto) { 
    return this.productsService.addProduct(productDto);
  }
  
  @Put()
  updateProduct(@Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct(updateProductDto);
  }

  @Get(':id')
  getProduct(@Param("id") id: string ) {
    return this.productsService.getProduct(id);
  }

}
