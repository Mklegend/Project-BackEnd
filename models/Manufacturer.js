const mongoose = require("mongoose");
const { Schema } = mongoose;

const ManufacturerSchema = new Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  accountAddress:{
    type:String,
    required:true
  },
  authContractAddress:{
    type:String,
  },
  productsContractAddress:{
    type:String,
  }
});

module.exports = mongoose.model("Manufacturer", ManufacturerSchema);

