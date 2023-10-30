import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  summary: string;
}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);
