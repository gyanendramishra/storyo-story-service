import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoryService } from './story.service';
import { Story, StorySchema } from './story.schema';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client-options';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }]),
    ClientsModule.register([
      {
        name: 'STORY_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [],
  providers: [StoryService],
})
export class StoryModule {}
