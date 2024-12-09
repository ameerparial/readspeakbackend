const { Schema, model } = require("mongoose");

const FavoriteSpeakers = new Schema({
  shortname: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("FavoriteSpeakers", FavoriteSpeakers);
