import mongoose, { Schema, Document } from 'mongoose';

export interface IPropertType extends Document {
  name: string;
}

const schema: Schema = new Schema({
  name: { type: String }
});

export default mongoose.model<IPropertType>('PropertyType', schema);
