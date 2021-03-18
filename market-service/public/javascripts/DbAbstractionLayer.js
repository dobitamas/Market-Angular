var mongodb = require('mongodb');
var mongoose = require('mongoose');

ObjectId = require('mongodb').ObjectID;

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




async function addItemToCart(req, res) {
    
    var itemId = req.body.itemId;


    const newCartItem = {
        "itemId": mongodb.ObjectId(itemId)
    }

    await db.collection('CART').insertOne(newCartItem)
        .then(result => console.log("SUCCESSFULLY ADDED ITEM TO CART"))
        .catch(err => console.log("THIS IS THE ERROR: ", err));
     
    
}

async function getCart() {
    if(connected) {
        var items = await  db.collection('DEALS').find().toArray();
        var cart = await  db.collection('CART').find().toArray();

        var result = []

            items.forEach(item => {
                cart.forEach(cartItem => {
                    if(cartItem.itemId.toString() === item._id.toString()) {
                        result.push(item)
                    }
                })
            });
        

        return result;
    }
}

async function deleteFromCart(req) {
    console.log('ITEMID: ', ObjectId(req.query.itemid))

    return await db.collection('CART').deleteOne( { "itemId" : ObjectId(req.query.itemId.toString()) } );
}


module.exports = {mapDeals, getDealById, addItemToCart, getCart, deleteFromCart} 