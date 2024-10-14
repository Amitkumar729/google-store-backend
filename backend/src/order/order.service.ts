import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schema/order.schema';
import { CartService } from '../cart/cart.service';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        private cartService: CartService // Injecting CartService to clear the cart
    ) {}

    // Confirm order with cart items and additional details
    async confirmOrder(
        userId: string, 
        name: string, 
        email: string, 
        phone: string, 
        address: string, 
        cartItems: any[]
    ) {
        if (!userId) throw new BadRequestException('User ID is required.');
        if (!name || !email || !phone || !address) throw new BadRequestException('All personal details are required.');

         
        const newOrder = new this.orderModel({
            userId,
            name,
            email,
            phone,
            address,
            items: cartItems, 
        });

        try {
            const savedOrder = await newOrder.save();
           
            await this.cartService.clearCart(userId);
            return savedOrder;
        } catch (error) {
            throw new BadRequestException('Error confirming the order.');
        }
    }

    
    async getOrdersByUser(userId: string) {
        if (!userId) throw new BadRequestException('User ID is required to fetch orders.');

        return this.orderModel.find({ userId });
    }
}
