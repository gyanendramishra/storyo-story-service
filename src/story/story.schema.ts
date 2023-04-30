import { EStatus } from './story.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StoryDocument = HydratedDocument<Story>;

@Schema()
export class Story {
  @Prop({ maxlength: 50, required: true })
  title: string;

  @Prop({ maxlength: 500, required: true })
  sortDescription: string;

  @Prop({ maxlength: 5000, required: true })
  longDescription: string;
  @Prop({
    maxlength: 200,
    required: true,
    enum: [EStatus.PUBLISHED, EStatus.DRAFT],
    default: EStatus.DRAFT,
  })
  status: string;

  @Prop({ default: Date.now })
  publishedAt: Date;
}

export interface StoryType extends Story {
  _id: string;
}

export const StorySchema = SchemaFactory.createForClass(Story);
