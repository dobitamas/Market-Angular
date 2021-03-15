var mongoose = require('mongoose');

var cartItemSchema = new mongoose.Schema({
    itemId:  {
        type: String
    }
});


var cartItem = mongoose.model('CART', cartItemSchema);
module.exports = cartItem;