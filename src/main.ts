import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation
  app.useGlobalPipes(new ValidationPipe());

  // OpenAPI documentation
  const config = new DocumentBuilder()
    .setTitle('Node JS Challenge API')
    .addApiKey({ type: 'apiKey', name: 'api-key', in: 'header' }, 'api-key')
    .setVersion('v1')
    .setDescription('RESTful APIs for managing books')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
