import mongoose, { Schema, Document } from 'mongoose';

export interface IRoomFeature extends Document {
  name: string;
}

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model<IRoomFeature>('RoomFeature', schema);
