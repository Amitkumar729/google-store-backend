import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

     
    async addToCart(userId: string, model: string, color: string) {
        if (!userId) throw new BadRequestException('User ID is required.');
        if (!model || !color) throw new BadRequestException('Model and color are required.');

        const cartItem = new this.cartModel({ userId, model, color });
        return cartItem.save();
    }

    
    async getCartByUser(userId: string) {
        if (!userId) throw new BadRequestException('User ID is required to fetch the cart.');

        return this.cartModel.find({ userId });  
    }

    
    async clearCart(userId: string) {
        if (!userId) throw new BadRequestException('User ID is required to clear the cart.');

        return this.cartModel.deleteMany({ userId });  
    }
}
