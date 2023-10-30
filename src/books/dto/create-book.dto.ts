import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ default: 'string' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ default: 'string' })
  @IsNotEmpty()
  author: string;

  @ApiProperty({ default: 'string' })
  @IsNotEmpty()
  summary: string;
}
