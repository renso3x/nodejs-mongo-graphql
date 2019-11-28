import mongoose, { Schema, Document } from 'mongoose';
import { IProperty } from './Property';

export interface IUser extends Document {
  email: string;
  password: string;
  property: IProperty['_id'];
}

const schema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property'
  }
});

export default mongoose.model<IUser>('User', schema);
