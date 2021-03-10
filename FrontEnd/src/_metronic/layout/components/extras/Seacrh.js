import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";




export default function Seacrh() {

  const [inputValue, setInputValue] = React.useState("");
  const [options, setoptions] = React.useState([])
    const [value, setValue] = React.useState(options[0]);
  const twelvedata = require("twelvedata");

  // setup the config

  const config = {
    key: "97e11ed1d2614602a000b09743e06a0d",
  };

  // initialize and use the client

  const client = twelvedata(config);
  let params = {
    symbol: inputValue,
    outputsize: 5,
  };
  client
    .symbolSearch(params)
    .then((data) => {
      var symbols = [];
     let res = data.data;
     for (let index = 0; index < res.length; index++) {
       const element = res[index];
       symbols.push(element.symbol)
       
     }
     
       setoptions(symbols)
    })
    .catch((error) => {
      // handle error
    });

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="symbol"
      options={options}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Symbol" variant="outlined" />
      )}
    />
  );
}
