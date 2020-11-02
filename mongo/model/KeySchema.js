/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 02 2020 19:23:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const mongoose = require("mongoose");

const keySchema = new mongoose.Schema({
  key: String,
  type: String,
  duration: Number,
  isSold: Boolean,
  isActivated: Boolean,
  sellingDate: { type: String, default: Date.now },
});

module.exports = mongoose.model("Key", keySchema);
