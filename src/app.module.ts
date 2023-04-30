import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gcm:gKbhswle0yBkE5Ap@cluster1.gne07sr.mongodb.net/gcm-pwa?retryWrites=true&w=majority',
    ),
    StoryModule,
  ],
})
export class AppModule {}
