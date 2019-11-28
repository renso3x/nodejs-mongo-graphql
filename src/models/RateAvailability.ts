import mongoose, { Schema, Document } from 'mongoose';

import { IRatePlan } from './RatePlan';
import { ISeasonRatePlan } from './SeasonRatePlan';

interface IRateAvailabilty extends Document {
  rate: IRatePlan['_id'];
  date: string;
  seasonRate: ISeasonRatePlan['_id'];
}

const schema: Schema = new Schema({
  rate: {
    type: Schema.Types.ObjectId,
    ref: 'RatePlan'
  },
  date: {
    type: Date
  },
  seasonRate: {
    type: Schema.Types.ObjectId,
    ref: 'SeasonRatePlan'
  }
});

export default mongoose.model<IRateAvailabilty>('RateAvailability', schema);
