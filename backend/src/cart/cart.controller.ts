import { Body, Controller, Get, Post, Req, UseGuards, Delete, UnauthorizedException } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @UseGuards(JwtAuthGuard)
    @Post('add')
    async addToCart(@Req() req, @Body() { model, color }: { model: string; color: string }) {
        const userId = req.user?.userId;

        if (!userId) throw new UnauthorizedException('User ID is required.');

        return this.cartService.addToCart(userId, model, color);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCart(@Req() req) {

        const userId = req.user?.userId;
        const email = req.user?.email;
        // console.log(email);

        if (!userId) throw new UnauthorizedException('User ID is required.');

        const cartItems = await this.cartService.getCartByUser(userId);

        return {
            email: email,
            items: cartItems,
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('clear')
    async clearCart(@Req() req) {
        const userId = req.user?.userId;

        if (!userId) throw new UnauthorizedException('User ID is required.');

        return this.cartService.clearCart(userId);
    }
}
