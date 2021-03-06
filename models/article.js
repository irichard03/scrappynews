const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "note"
  }
});
const article = mongoose.model("article", articleSchema);
module.exports = article;
