const mongoose = require("mongoose");

const Season = require("./schemas/Season");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: new mongoose.SchemaType.ObjectId(),
    ref: "RoomRateType"
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

const RatePlan = mongoose.model("RatePlan", schema);

module.exports = RatePlan;
