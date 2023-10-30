import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { DUPLICATE_KEY_EXP, NOT_FOUND_EXP } from 'src/common/exception';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiKeyAuthGuard } from 'src/auth/guards/apikey-auth.guard';

@ApiSecurity('api-key')
@UseGuards(ApiKeyAuthGuard)
@Controller({
  version: '1',
  path: 'books',
})
@ApiTags('Books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOperation({
    summary: 'Create a new book',
    description: `This will create a new book`,
  })
  @Post('create-book')
  async createBook(@Body() dto: CreateBookDto) {
    try {
      return await this.booksService.create(dto);
    } catch (error) {
      if (
        error.name === 'MongoServerError' &&
        error.message.includes('title_1 dup key')
      ) {
        throw DUPLICATE_KEY_EXP;
      }
    }
  }

  @ApiOperation({
    summary: 'Update a book',
    description: `This will update a book by given bookId`,
  })
  @Put('update-book')
  async updateBook(
    @Query('bookId') bookId: string,
    @Body() dto: UpdateBookDto,
  ) {
    try {
      return await this.booksService.update(bookId, dto);
    } catch (error) {
      if (
        error.name === 'MongoServerError' &&
        error.message.includes('title_1 dup key')
      ) {
        throw DUPLICATE_KEY_EXP;
      }

      if (error.name === 'DocumentNotFoundError') {
        throw NOT_FOUND_EXP;
      }
    }
  }

  @ApiOperation({
    summary: 'Get specific book',
    description: `This will get specific book by given bookId`,
  })
  @Get('get-book')
  async getBook(@Query('bookId') bookId: string) {
    try {
      return await this.booksService.findOne(bookId);
    } catch (error) {
      if (error.name === 'DocumentNotFoundError') {
        throw NOT_FOUND_EXP;
      }
    }
  }

  @ApiOperation({
    summary: 'Get list of books',
    description: `This will get list of books`,
  })
  @Get('get-books')
  async getBooks() {
    return await this.booksService.findAll();
  }

  @ApiOperation({
    summary: 'Delete specific book',
    description: `This will delete specific book by given bookId`,
  })
  @Delete('delete-book')
  async deleteBook(@Query('bookId') bookId: string) {
    try {
      return await this.booksService.delete(bookId);
    } catch (error) {
      if (error.name === 'DocumentNotFoundError') {
        throw NOT_FOUND_EXP;
      }
    }
  }
}
