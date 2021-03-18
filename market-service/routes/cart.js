var express = require('express');
const { route } = require('.');
var router = express.Router();
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');

router.post('/addToCart/', async function(req, res, next) {
    await dbAbstractionLayer.addItemToCart(req);
    res.json(req.body.itemId)
})

router.get('/getCart', async function(req, res, next) {
    var result = await dbAbstractionLayer.getCart();
    res.json(result);
})

router.delete('/deleteFromCart/', async function(req, res, next) {
    var result = await dbAbstractionLayer.deleteFromCart(req);
    res.json(result);
})


module.exports = router;