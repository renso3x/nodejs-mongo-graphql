import mongoose, { Schema, Document } from 'mongoose';

import { IPropertType } from './PropertyType';
import { IPropertyOwner } from './PropertyOwner';

export interface IProperty extends Document {
  name: string;
  address: string;
  country: string;
  state: string;
  email: string;
  mobile: string;
  type: IPropertType['_id'];
  owner: IPropertyOwner['_id'];
}

const schema: Schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  email: {
    type: String,
    maxlength: 255,
    unique: true,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'PropertyType'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'PropertyOwner'
  }
});

export default mongoose.model<IProperty>('Property', schema);
