import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Seacrh(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [options, setoptions] = React.useState([]);
  const { value, setValue } = props;
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
        symbols.push(element.symbol);
      }

      setoptions(symbols);
    })
    .catch((error) => {
      // handle error
    });

  return (
    <div>
      <Autocomplete
        id="symbol"
        freeSolo
        options={options}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Symbol"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
