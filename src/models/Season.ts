import mongoose, { Schema, Document } from 'mongoose';

export interface ISeason extends Document {
  name: string;
}
const schema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model<ISeason>('Season', schema);
