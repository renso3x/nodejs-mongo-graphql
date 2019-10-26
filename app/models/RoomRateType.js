const mongoose = require("mongoose");

const RoomType = require("./schemas/RoomType");
const RoomFeature = require("./schemas/RoomFeature");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: RoomType,
  feature: [RoomFeature],
  property: {
    type: new mongoose.SchemaTypes.ObjectId(),
    ref: "Property"
  },
  maxRooms: {
    type: Number,
    default: 1
  }
});

const RoomRateType = mongoose.model("RoomRateType", schema);

module.exports = RoomRateType;
