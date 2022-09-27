import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start: any = async () => {
  const PORT = process.env.PORT;
  const app: any = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log('privet', PORT);
  });
};

start();
