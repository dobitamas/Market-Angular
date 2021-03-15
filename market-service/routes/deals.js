var express = require('express');
var router = express.Router();
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  dbAbstractionLayer.mapDeals().then(resp => {
    res.json(resp);
  }).catch(err => {
    res.status(500).json({});
  })
});

function getDeal(id) {
  dbAbstractionLayer.getDealById(id);
}

module.exports = router;
