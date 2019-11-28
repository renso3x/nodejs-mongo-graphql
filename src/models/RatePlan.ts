import mongoose, { Schema, Document } from 'mongoose';

import { IRoomRateType } from './RoomRateType';
import Season, { ISeason } from './Season';

export interface IRatePlan extends Document {
  name: string;
  type: IRoomRateType['_id'];
  feature: ISeason[];
  standardRate: number;
  minGuest: number;
  maxGuest: number;
}

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'RoomRateType'
  },
  feature: [Season],
  standardRate: {
    type: Number,
    default: 1
  },
  minGuest: {
    type: Number,
    default: 1
  },
  maxGuest: {
    type: Number,
    default: 2
  }
});

export default mongoose.model<IRatePlan>('RatePlan', schema);
