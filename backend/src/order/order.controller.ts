import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    Req,
    UnauthorizedException,
    UseGuards,
  } from '@nestjs/common';
  import { OrderService } from './order.service';
  import { CartService } from '../cart/cart.service';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  
  @Controller('orders')
  export class OrderController {
    constructor(
      private orderService: OrderService,
      private cartService: CartService,
    ) {}
  
    @UseGuards(JwtAuthGuard)
    @Post('confirm')
    async confirmOrder(
      @Req() req,
      @Body()
      {
        name,
        email,
        phone,
        address,
      }: { name: string; email: string; phone: string; address: string },
    ) {
      try {
        const userId = req.user?.userId;
  
        if (!userId) throw new UnauthorizedException('User ID is required.');
  
        const cartItemsResponse = await this.cartService.getCartByUser(userId);
        const cartItems = cartItemsResponse.data;
  
        if (!cartItems || cartItems.length === 0) {
          throw new BadRequestException(
            'No items in the cart to place an order.',
          );
        }
  
        return this.orderService.confirmOrder(
          userId,
          name,
          email,
          phone,
          address,
          cartItems,
        );
      } catch (error) {
        return {
          status: 'error',
          message: 'Internal server error',
          error: error.response || null,
        };
      }
    }
  
    @UseGuards(JwtAuthGuard)
    @Get()
    async getOrders(@Req() req) {
      try {
        const userId = req.user?.userId;
  
        if (!userId) throw new UnauthorizedException('User ID is required.');
  
        return this.orderService.getOrdersByUser(userId);
      } catch (error) {
        return {
          status: 'error',
          message: 'Internal server error',
          error: error.response || null,
        };
      }
    }
  }
  