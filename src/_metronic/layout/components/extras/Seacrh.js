import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Seacrh(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [options, setoptions] = React.useState([]);
  const { setSelectedSymbol } = props;

  let params = {
    symbol: inputValue || "",
    outputsize: 5,
  };

  React.useEffect(() => {
    props.client
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
        console.log(error);
      });
  }, [inputValue]);
  return (
    <div>
      <Autocomplete
        id="symbol"
        freeSolo
        options={options}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        value={props.SelectedSymbol}
        onChange={(event, newValue) => {
          props.setSelectedSymbol(newValue);
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
