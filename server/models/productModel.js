var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {type: String},
  itemNumber: {type: String},
  category: {type: String},
  description: {type: String},
  retailPrice: {type: Number},
  discountedPrice: {type: Number},
  seller: {type: String},
  image: {type: String}
})

module.exports = mongoose.model("Product", productSchema);
