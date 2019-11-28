import mongoose, { Schema, Document } from 'mongoose';

import { IPropertType } from './PropertyType';
import RoomType, { IRoomType } from './RoomType';
import RoomFeature, { IRoomFeature } from './RoomFeature';

export interface IRoomRateType extends Document {
  name: string;
  type: IRoomType;
  feature: IRoomFeature[];
  property: IPropertType['_id'];
  maxRooms: number;
}

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: RoomType,
  feature: [RoomFeature],
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property'
  },
  maxRooms: {
    type: Number,
    default: 1
  }
});

export default mongoose.model<IRoomRateType>('RoomRateType', schema);
