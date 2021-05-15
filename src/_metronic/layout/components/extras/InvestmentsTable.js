import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Seacrh from "./Seacrh";
import firebase, { db } from "../../../../firebase/config";
const axios = require("axios").default;
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Symbol",
    numeric: false,
    disablePadding: true,
    label: "Ticker Symbol",
  },
  {
    id: "TotalStocks",
    numeric: true,
    disablePadding: false,
    label: "Total Stocks Held",
  },
  {
    id: "Protfolio",
    numeric: true,
    disablePadding: false,
    label: "% of Protfolio",
  },
  {
    id: "CostBasis",
    numeric: true,
    disablePadding: false,
    label: "Cost Basis",
  },
  {
    id: "Price",
    numeric: true,
    disablePadding: false,
    label: "Current Price",
  },

  {
    id: "exthrs",
    numeric: true,
    disablePadding: false,
    label: "Price Ext Hrs",
  },
  {
    id: "daychange",
    numeric: true,
    disablePadding: false,
    label: "Day Change $",
  },
  {
    id: "daypercentChange",
    numeric: true,
    disablePadding: false,
    label: " Day Change %",
  },

  {
    id: "lastupdated",
    numeric: true,
    disablePadding: false,
    label: "Stock Price Updated",
  },
  {
    id: "targetprice1",
    numeric: true,
    disablePadding: false,
    label: " 1st Target Price",
  },
  {
    id: "targetprice2",
    numeric: true,
    disablePadding: false,
    label: " 2nd Target Price",
  },
  {
    id: "targetprice3",
    numeric: true,
    disablePadding: false,
    label: " 3nd Target Price",
  },
  {
    id: "Alert Note",
    numeric: false,
    disablePadding: false,
    label: "Alert Note",
  },
  { id: "Industry", numeric: false, disablePadding: false, label: "Industry" },
];

function InvestmentsTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const { setSelectedSymbol, SelectedSymbol } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

InvestmentsTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const InvestmentsTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Invested Stocks
        </Typography>
      )}
      <div style={{ width: "150px", margin: "auto" }}>
        {" "}
        <button
          className="btn btn-success"
          onClick={() => {
            if (!props.SelectedSymbol) {
              console.log("Empty");
              return;
            }
            db.collection("Users")
              .doc("2342341342")
              .update({
                InvestedStocks: firebase.firestore.FieldValue.arrayUnion(
                  `${props.SelectedSymbol}`
                ),
              });
          }}
        >
          Add Investment
        </button>
        {"   "}
        <Seacrh
          SelectedSymbol={props.SelectedSymbol}
          setSelectedSymbol={props.setSelectedSymbol}
          client={props.client}
        />
      </div>
    </Toolbar>
  );
};

InvestmentsTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function InvestmentsTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("CurrentPrice");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [rows, setrows] = useState([]);
  console.log(props.InvestedStocks);
  React.useEffect(() => {
    let investmentatble = [];

    {
      let x = document.querySelector(".MuiTablePagination-spacer");
      x.innerHTML = `&nbsp<b>Total Cash $:</b> ${props.TotalQuantity}&nbsp&nbsp <b> Total Cash %:</b> ${props.TotalProfolio} %`;
      x.setAttribute("Padding", "0 30px");
      props.InvestedStocks &&
        props.InvestedStocks.forEach((element) => {
          Get(element).then(function(result) {
            if (result) {
              console.log(result);
              investmentatble.push({ ...result });
              // console.log(data);
            }
          });
        });
    }
    setrows(investmentatble);
  }, [props.InvestedStocks]);

  const { REACT_APP_FINANTIAL_MODELING_KEY } = process.env;
  console.log(REACT_APP_FINANTIAL_MODELING_KEY);
  async function Get(paramSymbol) {
    const investment1 = {
      Symbol: paramSymbol,
      Protfolio: "",
      CostBasis: "",
      Quantity: "",
      Price: "",
      daychange: "",
      daypercentChange: "",
      Industry: "",
      Timestamp: "",
    };

    const ReportRef = db
      .collection("Users")
      .doc("2342341342")
      .collection("Reports")
      .doc(paramSymbol);
    const doc = await ReportRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      investment1.Protfolio = doc.data().Protfolio;
      investment1.Quantity = doc.data().Quantity;

      investment1.CostBasis = doc.data().CostBasis;

      console.log("Document data:", doc.data());
    }
    const reqIndustry = await axios.get(
      `https://financialmodelingprep.com/api/v3/profile/${paramSymbol}?apikey=${REACT_APP_FINANTIAL_MODELING_KEY}`
    );
    investment1.Industry = await reqIndustry.data[0].industry;

    const qoute = await axios.get(
      `https://financialmodelingprep.com/api/v3/quote/${paramSymbol}?apikey=${REACT_APP_FINANTIAL_MODELING_KEY}`
    );

    investment1.daychange = await qoute.data[0].change;
    investment1.daypercentChange = await qoute.data[0].changesPercentage;
    investment1.Timestamp = await qoute.data[0].timestamp;
    investment1.Price = await qoute.data[0].price;

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
  // function createData() {
  //   let investmentatble = [];
  //   {
  //     ProspectStocks &&
  //       ProspectStocks.forEach((element) => {
  //         Get(element).then(
  //           investmentatble.push({ Symbol: element, ...Investment })
  //         );
  //       });
  //     setrows(investmentatble);
  //     console.log(investmentatble);
  //   }
  // }
  // setInterval(createData, 30000);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <InvestmentsTableToolbar
          numSelected={selected.length}
          setSelectedSymbol={props.setSelectedSymbol}
          SelectedSymbol={props.SelectedSymbol}
          client={props.client}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <InvestmentsTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Symbol);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Symbol}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Tooltip
                          title="Delete"
                          onClick={() => {
                            console.log("deleting", row.Symbol);
                            db.collection("Users")
                              .doc("2342341342")
                              .update({
                                InvestedStocks: firebase.firestore.FieldValue.arrayRemove(
                                  `${row.Symbol}`
                                ),
                              });
                          }}
                        >
                          <IconButton aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Symbol}
                      </TableCell>
                      <TableCell align="right">{row.Quantity}</TableCell>
                      <TableCell align="right">{row.Protfolio}</TableCell>
                      <TableCell align="right">{row.CostBasis}</TableCell>

                      <TableCell align="right">{row.Price}</TableCell>
                      <TableCell align="right">{}</TableCell>
                      <TableCell align="right">{row.daychange}</TableCell>
                      <TableCell align="right">
                        {row.daypercentChange}
                      </TableCell>

                      <TableCell align="right">{row.Timestamp}</TableCell>
                      <TableCell align="right">{}</TableCell>
                      <TableCell align="right">{}</TableCell>
                      <TableCell align="right">{}</TableCell>
                      <TableCell align="right">{}</TableCell>
                      <TableCell align="right">{row.Industry}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
