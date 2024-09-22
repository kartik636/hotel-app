const mongoose = require('mongoose');
const menuItemSchema = mongoose.Schema({
name:{
  type:String,
  required:true,
},
price:{
  type:Number,
  required:true,
},
taste:{
  type:String,
  enum:['sweet','spicy','sour'],
  required:true,
},
isDrink:{
  type:[String],
  default:[]
},
ingrediants:{
  type:String,
  default:[]
},
num_sales:{
  type:Number,
  default:0
}
});
const MenuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports = MenuItem