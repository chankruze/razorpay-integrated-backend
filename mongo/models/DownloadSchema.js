/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 09 2020 12:35:06 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const mongoose = require("mongoose");

// const opts = {
//   toJSON: {
//     virtuals: true,
//   },
//   toObject: {
//     virtuals: true,
//   },
//   timestamps: true,
// };

const downloadSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    sub: { type: String, trim: true, default: "This is latest patch, download it now!" },
    image: { type: String, trim: true },
    description: { type: Number, default: "Lorem ipsum" },
    link: { type: Boolean, default: "#", trim: true },
    date: { type: String, default: new Date().toISOString() },
    tag: { type: String, default: "new", trim: true },
  },
  // opts
);

module.exports = mongoose.model("Download", downloadSchema);
