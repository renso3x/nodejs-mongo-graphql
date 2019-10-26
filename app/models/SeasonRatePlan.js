const mongoose = require("mongoose");

const Season = require("./schemas/Season");

const schema = new mongoose.Schema({
  rate: {
    type: new mongoose.SchemaTypes.ObjectId(),
    ref: "RatePlan"
  },
  date: Season,
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

const SeasonRatePlan = mongoose.model("SeasonRatePlan", schema);

module.exports = SeasonRatePlan;
