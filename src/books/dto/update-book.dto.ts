import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateBookDto {
  @ApiProperty({ default: 'string' })
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ default: 'string' })
  @IsOptional()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ default: 'string' })
  @IsOptional()
  @IsNotEmpty()
  summary: string;
}
