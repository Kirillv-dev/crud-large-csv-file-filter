import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity'; 
import * as uuid from 'uuid';

@Injectable()
export class ProductsService { 
 
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
  ) {} 

  async addProduct(productDto: ProductDto) {
    await this.productModel.create<Product>({id: uuid.v4(), ...productDto});   
    return "Product created"
  }

  async updateProduct(updateProductDto: UpdateProductDto) { 
    const {id, name, price} = updateProductDto; 
     
    let product:Product = await this.productModel.findOne({
      where: { id },
    });  
    
    if (!product) return "user not found";
    product.name = name;
    product.price = price;
    await product.save();
    return `This action returns all products`; 
  }

  async getProduct(id: string) { 
    const product: Product = await this.productModel.findOne({where: {id}, raw: true}); 
    if (!product) return "This product doesnt exist" 
    return product;
  }
}