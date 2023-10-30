import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument, Book } from './entities/book.entity';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name)
    private readonly books: Model<BookDocument>,
  ) {}

  async create(data: Book): Promise<Book> {
    return await this.books.create(data);
  }

  async update(_id: string, data: UpdateBookDto): Promise<Book> {
    return await this.books
      .findByIdAndUpdate(_id, { $set: data }, { new: true })
      .orFail()
      .exec();
  }

  async findOne(_id: string): Promise<Book> {
    return await this.books.findById(_id).orFail().exec();
  }

  async findAll(): Promise<Book[]> {
    return await this.books.find();
  }

  async delete(_id: string): Promise<Book> {
    return await this.books.findByIdAndDelete(_id).orFail().exec();
  }
}
