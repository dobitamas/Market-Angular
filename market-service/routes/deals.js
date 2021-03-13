var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResp = {
    "handsetCards" : [
      {imageName: 'Bread', title: 'Bread', cols: 2, rows: 1 },
      {imageName: 'Pickle', title: 'Pickle', cols: 2, rows: 1 },
      {imageName: 'Tomato', title: 'Tomato', cols: 2, rows: 1 },
      {imageName: 'Meat', title: 'Meat', cols: 2, rows: 1 },
      {imageName: 'Banana', title: 'Banana', cols: 2, rows: 1 }
    ],
    "webCards": [
        {imageName: 'Bread', title: 'Bread', cols: 2, rows: 1 },
        {imageName: 'Pickle', title: 'Pickle', cols: 1, rows: 1 },
        {imageName: 'Tomato', title: 'Tomato', cols: 1, rows: 2 },
        {imageName: 'Meat', title: 'Meat', cols: 1, rows: 1 },
        {imageName: 'Banana', title: 'Banana', cols: 1, rows: 1 }
    ]
  }

  res.json(jsonResp);
});

module.exports = router;
