import React, { useState } from "react";
import { useSubheader } from "../../_metronic/layout";
import EnhancedTable from "../../_metronic/layout/components/extras/EnhancedTable";

export const ProspectStockesPage = (props) => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Prospect Stocks");
  const [SelectedSymbol, setSelectedSymbol] = useState("");
  const { user } = props;

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
  //     `https://financialmodelingprep.com/api/v3/profile/${paramSymbol}?apikey=060d486a08e036b0493de87c0f143d72`
  //   ).then((response) => {
  //     data = response.json();
  //     data.then(function(result) {
  //       investment1.Price = result[0].price;
  //       investment1.Industry = result[0].industry;
  //     });
  //   });

  //   await fetch(
  //     `https://financialmodelingprep.com/api/v3/quote/${paramSymbol}?apikey=060d486a08e036b0493de87c0f143d72`
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

  return (
    <>
      <EnhancedTable
        SelectedSymbol={SelectedSymbol}
        setSelectedSymbol={setSelectedSymbol}
        ProspectStocks={user.ProspectStocks}
      />
    </>
  );
};
