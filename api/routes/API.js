var express = require('express');
var router = express.Router();
const twelvedata = require("twelvedata");

// setup the config

const config = {
  key: "97e11ed1d2614602a000b09743e06a0d",
};

// initialize and use the client

const client = twelvedata(config);
/* GET home page. */
router.get('/:symbol&:outputsize', function(req, res, next) {
 
   let  params  = req.params;
    let symbols = [];
    client
      .symbolSearch(params)
      .then((data) => {
      
        let ress = data.data;
        for (let index = 0; index < ress.length; index++) {
          const element = ress[index];
          symbols.push(element.symbol);
         
        }
         res.send(symbols);
      })
      .catch((error) => {
        // handle error
      });
    
  });



module.exports = router;
