const mongoose = require("mongoose");

const PropertType = require("./schemas/PropertyType");

const schema = new mongoose.Schema({
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
  type: PropertType,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PropertOwner"
  }
});

const Property = mongoose.model("Property", schema);

module.exports = Property;
