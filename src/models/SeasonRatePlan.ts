import mongoose, { Schema, Document } from 'mongoose';

import { IRatePlan } from './RatePlan';
import { ISeason } from './Season';

export interface ISeasonRatePlan extends Document {
  rate: IRatePlan['_id'];
  date: ISeason['_id'];
  seasonRate: number;
  extraPaxRate: number;
  maxGuest: number;
}

const schema: Schema = new Schema({
  rate: {
    type: Schema.Types.ObjectId,
    ref: 'RatePlan'
  },
  date: {
    type: Schema.Types.ObjectId,
    ref: 'Season'
  },
  seasonRate: {
    type: Number,
    default: 1,
    required: true
  },
  extraPaxRate: {
    type: Number,
    default: 0
  },
  maxGuest: {
    type: Number,
    default: 0
  }
});

export default mongoose.model<ISeasonRatePlan>('SeasonRatePlan', schema);
