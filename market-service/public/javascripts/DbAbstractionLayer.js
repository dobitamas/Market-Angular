var mongodb = require('mongodb');
var mongoose = require('mongoose');

var connected = false;
var db = null;

mongodb.MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}).then(connection => {
    console.log("MONGODB CONNECTION IS LIVE!")
    connected = true;
    db = connection.db('market');
}).catch(error => {
    console.log("MONGODB CONNECTION COULD NOT BE MADE!")
});

// ASYNC BECAUSE CONStANTLY FETCHING
async function mapDeals(){
    if(connected) {
        let resp = {
            "handsetCards": [],
            "webCards": []
        }

        const deals = await db.collection('DEALS').find().toArray();

        deals.forEach(element => {

            let handsetElement = {}
            handsetElement['id'] = element['_id'];
            handsetElement['imageName']  = element['imageName'];
            handsetElement['title']  = element['title'];
            handsetElement['rows']  = element['handsetRows'];
            handsetElement['cols']  = element['handsetCols'];

            let webElement = {}
            
            webElement['id'] = element['_id'];
            webElement['imageName']  = element['imageName'];
            webElement['title']  = element['title'];
            webElement['rows']  = element['webRows']; 
            webElement['cols']  = element['webCols'];


            resp.handsetCards.push(handsetElement);

            resp.webCards.push(webElement);

            
        });

        return resp;
    }

    return null;
}

function getDealById(id) {
    if(connected) {
        var collection =  db.collection('DEALS');
        
        collection.forEach(element => {
            if(element._id === id)
            {
                return element;
            }
        });
    }
}

var cartSchema = new mongoose.Schema({
    "itemId": {"jsonType": "objectId"}
})

cartTable = mongoose.model('CART', cartSchema);




function addItemToCart(req, res) {
    var itemId = req.body.itemId;

    const newCartItem = {
        "itemId": mongoose.Types.ObjectId(itemId)
    }

    db.collection('CART').insertOne(newCartItem)
        .then(result => console.log("SUCCESSFULLY ADDED ITEM TO CART"))
        .catch(err => console.log("AN ERROR OCCOURED IN ADDING TO CART"));
    
    
}


module.exports = {mapDeals, getDealById, addItemToCart} 