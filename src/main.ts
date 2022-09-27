import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start: any = async () => {
  const PORT = process.env.PORT || 5000;
  const app: any = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log('privet', PORT);
  });
};

start();
