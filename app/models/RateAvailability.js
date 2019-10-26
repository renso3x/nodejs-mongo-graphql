const mongoose = require("mongoose");

const RoomType = require("./schemas/RoomType");

const schema = new mongoose.Schema({
  rate: {
    type: new mongoose.SchemaTypes.ObjectId(),
    ref: "RatePlan"
  },
  date: {
    type: Date
  },
  seasonRate: {
    type: new mongoose.SchemaTypes.ObjectId(),
    ref: "SeasonRatePlan"
  }
});

const RateAvailability = mongoose.model("RateAvailability", schema);

module.exports = RateAvailability;
