import { BadRequestException, Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CartService } from '../cart/cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrderController {
    constructor(
        private orderService: OrderService,
        private cartService: CartService  
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post('confirm')
    async confirmOrder(
        @Req() req,
        @Body() { name, email, phone, address }: { name: string; email: string; phone: string; address: string }
    ) {
        const userId = req.user?.userId;

        if (!userId) throw new UnauthorizedException('User ID is required.');

        
        const cartItems = await this.cartService.getCartByUser(userId);

        if (!cartItems || cartItems.length === 0) {
            throw new BadRequestException('No items in the cart to place an order.');
        }

        
        return this.orderService.confirmOrder(userId, name, email, phone, address, cartItems);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getOrders(@Req() req) {
        const userId = req.user?.userId;

        if (!userId) throw new UnauthorizedException('User ID is required.');

        return this.orderService.getOrdersByUser(userId);
    }
}
