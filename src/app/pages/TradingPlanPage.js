import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Paper, TextField } from "@material-ui/core";

const options = [
  "None",
  "25 / 25 / 50",
  "10 % ,10 % ,10 % ,20 % ,20 % ,30 % ",
  "10 % ,10 % ,30 % ,50 % ",
];

const buyinpercentlongoptions = [
  "None",
  "25 / 25 / 50",
  "10 % ,10 % ,10 % ,20 % ,20 % ,30 % ",
  "10 % ,10 % ,30 % ,50 % ",
];
function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  function handleEntering() {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  }

  function handleCancel() {
    onClose();
  }

  function handleOk() {
    onClose(value);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Buy In Method</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="Ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
function Buyinpercentlong(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  function handleEntering() {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  }

  function handleCancel() {
    onClose();
  }

  function handleOk() {
    onClose(value);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Buy In Method</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="Ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: "80%",
    maxHeight: 435,
  },
}));

function TradingPlanPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("None");
  const [plan, setplan] = React.useState(0);
  function valuetext(value) {
    return `${value}°C`;
  }
  function handleClickListItem() {
    setOpen(true);
  }

  function handleClose(newValue) {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  }
  console.log(plan);
  return (
    <Paper>
      <div style={{ padding: "35px" }}>
        <div className={classes.root}>
          <List component="div" role="list">
            <ListItem
              // button
              divider
              aria-haspopup="true"
              aria-controls="Plan"
              aria-label="Plan"
              // onClick={handleClickListItem}
              role="listitem"
            >
              <ListItemText primary="Amount of Plays " secondary={plan} />

              <div style={{ width: "250px" }}>
                {" "}
                <Slider
                  defaultValue={30}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  onChange={(e, val) => setplan(val)}
                  step={1}
                  marks
                  min={0}
                  max={15}
                />
              </div>
            </ListItem>
            <ListItem
              // button
              divider
              aria-haspopup="true"
              aria-controls="Plan"
              aria-label="Plan"
              // onClick={handleClickListItem}
              role="listitem"
            >
              <ListItemText
                primary="Bankroll % per Play"
                secondary={plan + " %"}
              />

              <div style={{ width: "250px" }}>
                {" "}
                <Slider
                  defaultValue={30}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  onChange={(e, val) => setplan(val)}
                  step={1}
                  marks
                  min={0}
                  max={15}
                />
              </div>
            </ListItem>
            <ListItem
              // button
              divider
              aria-haspopup="true"
              aria-controls="Plan"
              aria-label="Plan"
              // onClick={handleClickListItem}
              role="listitem"
            >
              <ListItemText primary="Bankroll $ per Play" secondary={plan} />

              <div style={{ width: "250px" }}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Bankroll $ per Play"
                  variant="outlined"
                />
              </div>
            </ListItem>

            <ListItem
              button
              divider
              aria-haspopup="true"
              aria-controls="ringtone-menu"
              aria-label="Phone ringtone"
              onClick={handleClickListItem}
              role="listitem"
            >
              <ListItemText primary="Buy In Method" secondary={value} />
            </ListItem>
            <ListItem
              // button
              divider
              aria-haspopup="true"
              aria-controls="Plan"
              aria-label="Plan"
              // onClick={handleClickListItem}
              role="listitem"
            >
              <ListItemText primary="Sector Plan" secondary={plan} />

              <div style={{ width: "250px" }}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Sector Plan"
                  variant="outlined"
                  type="number"
                />
              </div>
            </ListItem>
            <ListItem
              // button
              divider
              aria-haspopup="true"
              aria-controls="Plan"
              aria-label="Plan"
              // onClick={handleClickListItem}
              role="listitem"
            >
              <ListItemText primary="Austin / Lee Ratio" secondary={plan} />

              <div style={{ width: "250px" }}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Austin"
                  variant="outlined"
                  type="number"
                  style={{ width: "100px" }}
                  error={false}
                />
                <TextField
                  id="outlined-basic"
                  label="Lee"
                  variant="outlined"
                  type="number"
                  style={{ width: "100px" }}
                />
              </div>
            </ListItem>

            <ConfirmationDialogRaw
              classes={{
                paper: classes.paper,
              }}
              id="ringtone-menu"
              keepMounted
              open={open}
              onClose={handleClose}
              value={value}
            />
          </List>
        </div>
      </div>
    </Paper>
  );
}

export default TradingPlanPage;
