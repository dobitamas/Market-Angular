var mongodb = require('mongodb');

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

async function addToCart() {
    
}

module.exports = {mapDeals} 