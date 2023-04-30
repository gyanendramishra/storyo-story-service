import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Story, StoryType } from './story.schema';

@Injectable()
export class StoryService {
  constructor(
    @InjectModel(Story.name) private readonly storyModel: Model<StoryType>,
  ) {}

  async getStoryById(id: string): Promise<StoryType> {
    return await this.storyModel.findById(id).lean().exec();
  }

  async getAllStories(): Promise<StoryType[]> {
    return await this.storyModel.find().lean().exec();
  }
}
