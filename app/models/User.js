const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  property: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Property"
  },
  role: {
    type: String,
    enum: ["isAdmin", "isUser", "isRootUser"],
    required: true
  }
});

const User = mongoose.model("User", schema);

module.exports = User;
