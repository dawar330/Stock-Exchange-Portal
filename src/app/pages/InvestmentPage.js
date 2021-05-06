import React, { useState } from "react";
import { useSubheader } from "../../_metronic/layout";
import InvestmentsTable from "../../_metronic/layout/components/extras/InvestmentsTable";

export const InvestmentPage = (props) => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Investments");

  const [SelectedSymbol, setSelectedSymbol] = useState("");
  const { user } = props;

  // React.useEffect(() => {
  //   let investmentatble = [];
  //   let data;
  //   {
  //     user.ProspectStocks &&
  //       user.ProspectStocks.forEach((element) => {
  //         Get(element).then(function(result) {
  //           data = result;
  //           investmentatble.push({ Symbol: element, ...data });
  //         });
  //         setrows(investmentatble);
  //       });
  //   }
  // }, [user.ProspectStocks]);
  // setup the config

  // const config = {
  //   key: "97e11ed1d2614602a000b09743e06a0d",
  // };

  // // initialize and use the client

  // const client = twelvedata(config);
  // async function Get(paramSymbol) {
  //   let investment1 = {
  //     Price: "",
  //     daychange: "",
  //     daypercentChange: "",
  //     Industry: "",
  //     Timestamp: "",
  //   };
  //   db.collection("Users")
  //     .doc("2342341342")
  //     .update({
  //       ProspectStocks: firebase.firestore.FieldValue.arrayUnion(
  //         `${paramSymbol}`
  //       ),
  //     });
  //   let data;
  //   await fetch(
  //     `https://financialmodelingprep.com/api/v3/profile/${paramSymbol}?apikey=process.env.REACT_APP_FINANTIAL_MODELING_KEY`
  //   ).then((response) => {
  //     data = response.json();
  //     data.then(function(result) {
  //       investment1.Price = result[0].price;
  //       investment1.Industry = result[0].industry;
  //     });
  //   });

  //   await fetch(
  //     `https://financialmodelingprep.com/api/v3/quote/${paramSymbol}?apikey=process.env.REACT_APP_FINANTIAL_MODELING_KEY`
  //   ).then((response) => {
  //     data = response.json();
  //     data.then(function(result) {
  //       investment1.daychange = result[0].change;
  //       investment1.daypercentChange = result[0].changesPercentage;
  //       investment1.Timestamp = result[0].timestamp;
  //     });
  //   });

  //   // GetPrice(paramSymbol);
  //   // GetTechIndicator(paramSymbol);
  //   // Getadx(paramSymbol);
  //   // Getbbands(paramSymbol);
  //   // Getema(paramSymbol);
  //   // Getmacd(paramSymbol);
  //   // Getpercent_b(paramSymbol);
  //   // Getrsi(paramSymbol);
  //   // Getsma(paramSymbol);
  //   return investment1;
  // }

  // function GetPrice(paramSymbol) {
  //   const params = {
  //     symbol: paramSymbol,
  //   };
  //   client
  //     .price(params)
  //     .then((data) => {
  //       console.log(data);
  //       setInvestment((prevState) => {
  //         // Object.assign would also work
  //         return { ...prevState, Price: data.price };
  //       });
  //     })
  //     .catch((error) => {
  //       // handle error
  //     });
  // }
  // function GetTechIndicator(paramSymbol) {
  //   let result;
  //   let params = {
  //     symbols: [paramSymbol],
  //     intervals: ["1min"],
  //     outputsize: 1,
  //     methods: [
  //       {
  //         name: "ema",
  //       },
  //       {
  //         name: "adx",
  //       },
  //       {
  //         name: "stoch",
  //       },
  //       {
  //         name: "bbands",
  //       },
  //       {
  //         name: "macd",
  //       },
  //       {
  //         name: "rsi",
  //       },
  //       {
  //         name: "sma",
  //       },
  //       {
  //         name: "percent_b",
  //       },
  //     ],
  //   };

  //   client
  //     .complexData(params)
  //     .then((data) => {
  //       result = data;
  //       console.log(result);

  //       setInvestment((prevState) => {
  //         return {
  //           ...prevState,
  //           ema: result.data[0].values[0].ema,
  //           adx: result.data[1].values[0].adx,
  //           Stoch: result.data[2].values[0],
  //           bbands: result.data[3].values[0],
  //           macd: result.data[4].values[0],
  //           rsi: result.data[5].values[0].rsi,
  //           sma: result.data[6].values[0].sma,
  //           percent_b: result.data[7].values[0].percent_b,
  //         };
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  console.log(user);
  return (
    <>
      <InvestmentsTable
        SelectedSymbol={SelectedSymbol}
        setSelectedSymbol={setSelectedSymbol}
        // client={client}
        InvestedStocks={user.InvestedStocks}
        TotalProfolio={user.TotalProfolio}
        TotalQuantity={user.TotalQuantity}
      />
    </>
  );
};

export default InvestmentPage;
