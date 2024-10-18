import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UseGuards,
    Delete,
    UnauthorizedException,
    InternalServerErrorException,
  } from '@nestjs/common';
  import { CartService } from './cart.service';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  
  @Controller('cart')
  export class CartController {
    constructor(private cartService: CartService) {}
  
    @UseGuards(JwtAuthGuard)
    @Post('add')
    async addToCart(
      @Req() req,
      @Body() { model, color }: { model: string; color: string },
    ) {
      try {
        const userId = req.user?.userId;
  
        if (!userId) throw new UnauthorizedException('User ID is required.');
  
        return this.cartService.addToCart(userId, model, color);
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
    async getCart(@Req() req) {
      try {
        const userId = req.user?.userId;
        const email = req.user?.email;
        // console.log(email);
  
        if (!userId) throw new UnauthorizedException('User ID is required.');
  
        const cartItems = await this.cartService.getCartByUser(userId);
  
        return {
          items: cartItems,
          email: email,
        };
      } catch (error) {
        return {
          status: 'error',
          message: 'Internal server error',
          error: error.response || null,
        };
      }
    }
  
    @UseGuards(JwtAuthGuard)
    @Delete('clear')
    async clearCart(@Req() req) {
      try {
        const userId = req.user?.userId;
  
        if (!userId) throw new UnauthorizedException('User ID is required.');
  
        return this.cartService.clearCart(userId);
      } catch (error) {
        return {
          status: 'error',
          message: 'Internal server error',
          error: error.response || null,
        };
      }
    }
  }
  