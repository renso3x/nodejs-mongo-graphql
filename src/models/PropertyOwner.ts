import mongoose, { Schema, Document } from 'mongoose';

export interface IPropertyOwner extends Document {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  contactNumber: string;
}

const schema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    maxlength: 255,
    unique: true,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  }
});

export default mongoose.model<IPropertyOwner>('PropertyOwner', schema);
