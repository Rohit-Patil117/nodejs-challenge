import { ConflictException, NotFoundException } from '@nestjs/common';

export const DUPLICATE_KEY_EXP = new ConflictException('Duplicate book title');
export const NOT_FOUND_EXP = new NotFoundException(
  'Book not found by given bookId',
);
