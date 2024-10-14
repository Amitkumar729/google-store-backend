import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    model: string;

    @Prop({ required: true })
    color: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
