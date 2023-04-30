import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['story' /*, 'user'*/],
    protoPath: [
      join(__dirname, './story/story.proto'),
      // join(__dirname, '../../user-service/src/user/user.proto'),
    ],
    url: 'localhost:8084', // ${process.env.GRPC_HELLO_SERVICE_PORT}
    // package: 'story',
    // protoPath: join(__dirname, './story/story.proto'),
  },
};
