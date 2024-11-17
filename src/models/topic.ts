import mongoose, { Schema } from 'mongoose';

interface ITopic {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const TopicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Topic = mongoose.models.Topic || mongoose.model<ITopic>('Topic', TopicSchema);

export default Topic;