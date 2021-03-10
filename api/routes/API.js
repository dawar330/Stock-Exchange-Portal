var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("APIsn BAadN GAYE");
});
router.get('/Investments/', function(req, res, next) {
  res.send("API BAN GAYE");
});

module.exports = router;
