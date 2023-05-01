import { NestFactory } from '@nestjs/core';
import { INestMicroservice } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client-options';

async function bootstrap() {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      grpcClientOptions,
    );
  await app.listen();
}
bootstrap();
