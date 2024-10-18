import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schema/order.schema';
import { CartService } from '../cart/cart.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private cartService: CartService,
  ) {}

  async confirmOrder(
    userId: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    cartItems: any[],
  ) {
    try {
      if (!userId) throw new BadRequestException('User ID is required.');
      if (!name || !email || !phone || !address)
        throw new BadRequestException('All personal details are required.');

      const newOrder = new this.orderModel({
        userId,
        name,
        email,
        phone,
        address,
        items: cartItems,
      });
      const savedOrder = await newOrder.save();

      await this.cartService.clearCart(userId);
      return {
        status: 'success',
        message: 'Order confirmed successfully.',
        data: savedOrder,
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Error confirming order.',
        error: error.response || null,
      };
    }
  }

  async getOrdersByUser(userId: string) {
    try {
      if (!userId)
        throw new BadRequestException('User ID is required to fetch orders.');

      const result = await this.orderModel.find({ userId });
      return {
        status: 'success',
        message: 'Orders retrieved successfully.',
        data: result,
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Error retreiving order.',
        error: error.response || null,
      };
    }
  }
}
