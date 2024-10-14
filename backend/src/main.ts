import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://127.0.0.1:5173', // Frontend origin
    credentials: true, // Allow cookies if needed
  });

  await app.listen(3000);
}
bootstrap();
