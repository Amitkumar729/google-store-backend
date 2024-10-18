import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  async addToCart(userId: string, model: string, color: string) {
    try {
      if (!userId) throw new BadRequestException('User ID is required.');
      if (!model || !color)
        throw new BadRequestException('Model and color are required.');

      const cartItem = new this.cartModel({ userId, model, color });
      cartItem.save();
      return {
        status: 'success',
        message: 'Items added to cart',
        data: cartItem,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message || 'Failed to add item to the cart.',
        error: error.response || null,
      };
    }
  }

  async getCartByUser(userId: string) {
    try {
      if (!userId)
        throw new BadRequestException('User ID is required to fetch the cart.');

      const cartItems = await this.cartModel.find({ userId });
      // console.log(cartItems);
      return {
        status: 'success',
        message: 'Items retrieved from the cart.',
        data: cartItems,
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Failed to retrieve cart items.',
        error: error.response || null,
      };
    }
  }

  async clearCart(userId: string) {
    try {
      if (!userId)
        throw new BadRequestException('User ID is required to clear the cart.');

      const result = await this.cartModel.deleteMany({ userId });
      return {
        status: 'success',
        message: 'Cart cleared successfully.',
        data: result,
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Failed to delete cart items.',
        error: error.response || null,
      };
    }
  }
}
