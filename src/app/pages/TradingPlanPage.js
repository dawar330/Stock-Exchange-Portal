import React, { useState } from "react";
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
import Grid from "@material-ui/core/Grid";
const options = [
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
function PsyDialog(props) {
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
      <DialogTitle id="confirmation-dialog-title">
        Trading Plan Psychology
      </DialogTitle>
      <DialogContent dividers>
        <ListItemText primary="Bloody Red Market" />
        <div style={{ width: "400px" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Plan"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-multiline-flexible"
            label="Reason"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
        </div>{" "}
        <ListItemText primary="Volitile Market" />
        <div style={{ width: "400px" }}>
          {" "}
          <TextField
            id="filled-multiline-flexible"
            label="Plan"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-multiline-flexible"
            label="Reason"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
        </div>{" "}
        <ListItemText primary="Super Green Recovery Market" />
        <div style={{ width: "400px" }}>
          {" "}
          <TextField
            id="filled-multiline-flexible"
            label="Plan"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-multiline-flexible"
            label="Reason"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
        </div>
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
function ReqDialog(props) {
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
      <DialogTitle id="confirmation-dialog-title">
        Requirements To Enter A Play
      </DialogTitle>
      <DialogContent dividers>
        <ListItemText primary="Short Swings" />
        <div style={{ width: "400px" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Short"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
        </div>{" "}
        <ListItemText primary="Long Swings" />
        <div style={{ width: "400px" }}>
          {" "}
          <TextField
            id="filled-multiline-flexible"
            label="Long"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
        </div>{" "}
        <ListItemText primary="Options" />
        <div style={{ width: "400px" }}>
          {" "}
          <TextField
            id="filled-multiline-flexible"
            label="Options"
            multiline
            rowsMax="4"
            margin="normal"
            variant="filled"
          />
        </div>
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
function SLTakeProfit(props) {
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
      <DialogTitle id="confirmation-dialog-title">
        SL / Take Profit %
      </DialogTitle>
      <DialogContent dividers>
        <ListItemText primary="Bloody Red Market" />
        <div style={{ width: "250px" }}>
          {" "}
          <Slider
            defaultValue={30}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            onChange={(e, val) => {}}
            step={1}
            marks
            min={0}
            max={15}
          />
        </div>{" "}
        <ListItemText primary="Volitile Market" />
        <div style={{ width: "250px" }}>
          {" "}
          <Slider
            defaultValue={30}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            onChange={(e, val) => {}}
            step={1}
            marks
            min={0}
            max={15}
          />
        </div>{" "}
        <ListItemText primary="Super Green Recovery Market" />
        <div style={{ width: "250px" }}>
          {" "}
          <Slider
            defaultValue={30}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            onChange={(e, val) => {}}
            step={1}
            marks
            min={0}
            max={15}
          />
        </div>
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
  const [openPsy, setOpenPsy] = React.useState(false);
  const [openReq, setOpenReq] = React.useState(false);
  const [openSL, setOpenSL] = React.useState(false);
  const [value, setValue] = React.useState("None");
  const [Play, setPlay] = useState();
  const [BankrollPercent, setBankrollPercent] = useState();
  const [Bankroll$, setBankroll$] = useState();
  const [BuyinMethod, setBuyinMethod] = useState("");
  const [SectorPlan, setSectorPlan] = useState();
  const [Austin, setAustin] = useState();
  const [lee, setlee] = useState();
  const [Buyinpercentlong, setBuyinpercentlong] = useState();
  const [Buyinpercentshort, setBuyinpercentshort] = useState();
  const [typeplayoption, settypeplayoption] = useState();
  const [typeplayRetirement, settypeplayRetirement] = useState();
  const [typeplaySwings, settypeplaySwings] = useState();

  const [risk, setrisk] = useState();
  const [reward, setreward] = useState();
  const [BloodyMarket, setBloodyMarket] = useState();
  const [VolitileMarket, setVolitileMarket] = useState();
  const [SuperGreenRecoryMarket, setSuperGreenRecoryMarket] = useState();
  const [Rule, setRule] = useState("");
  const [plan, setplan] = React.useState(0);
  function valuetext(value) {
    return `${value}°C`;
  }
  function handleClickListItem() {
    setOpen(true);
  }
  function handleClickSL() {
    setOpenSL(true);
  }
  function handleClickPsy() {
    setOpenPsy(true);
  }
  function handleClose(newValue) {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  }
  function handleCloseSL(newValue) {
    setOpenSL(false);

    if (newValue) {
      setValue(newValue);
    }
  }
  function handleClosePsy(newValue) {
    setOpenPsy(false);

    if (newValue) {
      setValue(newValue);
    }
  }
  function handleClickReq() {
    setOpenReq(true);
  }
  function handleCloseReq(newValue) {
    setOpenReq(false);

    if (newValue) {
      setValue(newValue);
    }
  }

  return (
    <Paper>
      <div style={{ padding: "35px" }}>
        <List component="div" role="list">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Amount of Plays " />

                <div style={{ width: "250px" }}>
                  {" "}
                  <Slider
                    defaultValue={30}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    onChange={(e, val) => setPlay(val)}
                    step={1}
                    marks
                    min={0}
                    max={15}
                  />
                </div>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Bankroll % per Play" />

                <div style={{ width: "250px" }}>
                  {" "}
                  <Slider
                    defaultValue={30}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    onChange={(e, val) => setBankrollPercent(val)}
                    step={1}
                    marks
                    min={0}
                    max={15}
                  />
                </div>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Bankroll $ per Play" />

                <div style={{ width: "250px" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Bankroll $ per Play"
                    variant="outlined"
                    value={Bankroll$}
                    onChange={(e) => {
                      setBankroll$(e.target.value);
                    }}
                    type="number"
                  />
                </div>
              </ListItem>
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
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
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Sector Plan" />

                <div style={{ width: "250px" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Sector Plan"
                    onChange={(e) => {
                      setSectorPlan(e.target.value);
                    }}
                    value={SectorPlan}
                    variant="outlined"
                    type="number"
                  />
                </div>
              </ListItem>
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Austin / Lee Ratio" />

                <div style={{ width: "250px" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Austin"
                    value={Austin}
                    variant="outlined"
                    onChange={(e) => {
                      setAustin(e.target.value);
                    }}
                    type="number"
                    style={{ width: "100px" }}
                    error={false}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Lee"
                    value={lee}
                    variant="outlined"
                    type="number"
                    onChange={(e) => {
                      setlee(e.target.value);
                    }}
                    style={{ width: "100px" }}
                  />
                </div>
              </ListItem>
            </Grid>{" "}
            <ConfirmationDialogRaw
              classes={{
                paper: classes.paper,
              }}
              id="ringtone-menu"
              keepMounted
              open={open}
              onClose={handleClose}
              value={value}
            />{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                button
                divider
                aria-haspopup="true"
                aria-controls="ringtone-menu"
                aria-label="Phone ringtone"
                onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText
                  primary="Buy In Percentage Long"
                  secondary={value}
                />
              </ListItem>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                button
                divider
                aria-haspopup="true"
                aria-controls="ringtone-menu"
                aria-label="Phone ringtone"
                onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText
                  primary="Buy In Percentage Short"
                  secondary={value}
                />
              </ListItem>
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Type of Play Ratio" />

                <div>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Option"
                    variant="outlined"
                    type="number"
                    onChange={(e) => {
                      settypeplayoption(e.target.value);
                    }}
                    value={typeplayoption}
                    style={{ width: "80px" }}
                    error={false}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Retirement"
                    variant="outlined"
                    type="number"
                    style={{ width: "95px" }}
                    error={false}
                    onChange={(e) => {
                      settypeplayRetirement(e.target.value);
                    }}
                    value={typeplayRetirement}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Swings"
                    variant="outlined"
                    type="number"
                    style={{ width: "80px" }}
                    onChange={(e) => {
                      settypeplaySwings(e.target.value);
                    }}
                    value={typeplaySwings}
                  />
                </div>
              </ListItem>
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Risk / Reward" />

                <div style={{ width: "250px" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Risk"
                    variant="outlined"
                    type="number"
                    style={{ width: "100px" }}
                    error={false}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Reward"
                    variant="outlined"
                    type="number"
                    style={{ width: "100px" }}
                  />
                </div>
              </ListItem>
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                button
                divider
                aria-haspopup="true"
                aria-controls="ringtone-menu"
                aria-label="Phone ringtone"
                onClick={handleClickSL}
                role="listitem"
              >
                <ListItemText primary="SL/Take Profit %" />
              </ListItem>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                button
                divider
                aria-haspopup="true"
                aria-controls="ringtone-menu"
                aria-label="Phone ringtone"
                onClick={handleClickPsy}
                role="listitem"
              >
                <ListItemText primary="Trading Psychology Plan " />
              </ListItem>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                button
                divider
                aria-haspopup="true"
                aria-controls="ringtone-menu"
                aria-label="Phone ringtone"
                onClick={handleClickReq}
                role="listitem"
              >
                <ListItemText primary="Requirements To Enter A Play" />
              </ListItem>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <ListItem
                // button
                divider
                aria-haspopup="true"
                aria-controls="Plan"
                aria-label="Plan"
                // onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Rules" />

                <div>
                  {" "}
                  <TextField
                    id="filled-multiline-flexible"
                    label="Rules"
                    multiline
                    rowsMax="4"
                    variant="outlined"
                    type="text"
                    style={{ width: "300px" }}
                    error={false}
                    onChange={(e) => {
                      setRule(e.target.value);
                    }}
                    value={Rule}
                  />
                </div>
              </ListItem>
            </Grid>{" "}
          </Grid>
          <SLTakeProfit
            classes={{
              paper: classes.paper,
            }}
            id="ringtone-menu"
            keepMounted
            open={openSL}
            onClose={handleCloseSL}
            value={value}
          />{" "}
          <PsyDialog
            classes={{
              paper: classes.paper,
            }}
            id="ringtone-menu"
            keepMounted
            open={openPsy}
            onClose={handleClosePsy}
            value={value}
          />{" "}
          <ReqDialog
            classes={{
              paper: classes.paper,
            }}
            id="ringtone-menu"
            keepMounted
            open={openReq}
            onClose={handleCloseReq}
            value={value}
          />{" "}
        </List>
      </div>
    </Paper>
  );
}

export default TradingPlanPage;
