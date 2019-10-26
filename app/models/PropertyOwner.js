const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  middleName: {
    type: String
  },
  email: {
    type: String,
    maxlength: 255,
    unique: true,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  }
});

const PropertyOwner = mongoose.model("PropertyOwner", schema);

module.exports = PropertyOwner;
