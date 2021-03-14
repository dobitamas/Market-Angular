var express = require('express');
var router = express.Router();
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');

router.post('/addItem/', function(req, res, next) {
    console.log(res);
    res.json(res);
})

module.exports = router;
