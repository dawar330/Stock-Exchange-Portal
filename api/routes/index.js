var express = require("express");
var router = express.Router();

/* GET home page. */
async function Get(paramSymbol) {
  const investment1 = {
    Symbol: paramSymbol,
    Price: "",
    daychange: "",
    daypercentChange: "",
    Industry: "",
    Timestamp: "",
  };
  db.collection("Users")
    .doc("2342341342")
    .update({
      ProspectStocks: firebase.firestore.FieldValue.arrayUnion(
        `${paramSymbol}`
      ),
    });

  const reqIndustry = await axios.get(
    `https://financialmodelingprep.com/api/v3/profile/${paramSymbol}?apikey=4479917021315275055cff582c3a893a`
  );
  investment1.Industry = reqIndustry.data[0].industry;

  // await fetch(
  //   `https://financialmodelingprep.com/api/v3/profile/${paramSymbol}?apikey=4479917021315275055cff582c3a893a`
  // ).then((response) => {
  //   let data = response.json();
  //   data.then(function(result) {
  //     console.log(result[0].industry);
  //     investment1.Industry = result[0].industry;
  //   });
  // });
  await fetch(
    `https://financialmodelingprep.com/api/v3/quote/${paramSymbol}?apikey=4479917021315275055cff582c3a893a`
  ).then((response) => {
    let data = response.json();
    data.then(function (result2) {
      investment1.daychange = result2[0].change;
      investment1.daypercentChange = result2[0].changesPercentage;
      investment1.Timestamp = result2[0].timestamp;
      investment1.Price = result2[0].price;
    });
  });

  // GetPrice(paramSymbol);
  // GetTechIndicator(paramSymbol);
  // Getadx(paramSymbol);
  // Getbbands(paramSymbol);
  // Getema(paramSymbol);
  // Getmacd(paramSymbol);
  // Getpercent_b(paramSymbol);
  // Getrsi(paramSymbol);
  // Getsma(paramSymbol);

  return investment1;
}
router.get("/api", function (req, res, next) {
  var investmentatble = [];
  let id = req.params.id.toString;
  console.log(id);
  // ProspectStocks.forEach((element) => {
  //   // Get(element).then(function (result) {
  //   //   if (result) {
  //   //     console.log(result);
  //   //     investmentatble.push({ ...result });
  //   //     // console.log(data);
  //   //   }
  //   // });
  // });
  res.json(req.query.id);
});

module.exports = router;
