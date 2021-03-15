import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Container } from "./styles";
import TablePagination from "@material-ui/core/TablePagination";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(registro, municipio, area, eixo, date, staus, info) {
  return {
    registro,
    municipio,
    area,
    eixo,
    date,
    staus,
    info,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [isactive, setIsactive] = useState(false);
  const classes = useRowStyles();

  const handleToggle = () => {
    setOpen(!open);
    setIsactive(!isactive);
  };

  //linhas
  return (
    <React.Fragment>
      <Container></Container>
      <TableRow className={classes.root}>
        <TableCell className={`${isactive ? "active" : ""}`}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={handleToggle}
            className={`${isactive ? "active" : ""}`}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          className={`${isactive ? "active" : ""} ContentRegister`}
          component="th"
          scope="row"
        >
          {row.registro}
        </TableCell>
        <TableCell className={`${isactive ? "active" : ""}`}>
          {row.municipio}
        </TableCell>
        <TableCell className={`${isactive ? "active" : ""}`}>
          {row.area}
        </TableCell>
        <TableCell className={`${isactive ? "active" : ""}`}>
          {row.eixo}
        </TableCell>
        <TableCell className={`${isactive ? "active" : ""}`}>
          {row.date}
        </TableCell>
        <TableCell className={`${isactive ? "active" : ""}`}>
          {row.staus}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={7}
          className={`${isactive ? "active" : ""}`}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={0} style={{ border: "1px solid trasnparent" }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table
                size="small"
                aria-label="purchases"
                className={` boxContent `}
              >
                {row.info}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//data
const rows = [
  createData(
    "2020.001.000155/RG",
    "Salvador",
    "COADE",
    "Fauna",
    "19/01/2021",
    "Vinculado",
    "Derramamento de óleo na pista"
  ),
  createData(
    "2021.001.000149/RG",
    "Salvador",
    "COFIS",
    "",
    "22/01/2021",
    "Registrado",
    "Derramamento de óleo na pista"
  ),

  createData(
    "2021.001.000149/RG",
    "Salvador",
    "COFIS",
    "Fauna",
    "22/01/2021",
    "Registrado",
    "Derramamento de óleo na pista"
  ),

  createData(
    "2021.001.000149/RG",
    "Salvador",
    "COFIS",
    "Fauna",
    "22/01/2021",
    "Registrado",
    "Derramamento de óleo na pista"
  ),
];

export default function App() {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="title">Nº do Registro</TableCell>
              <TableCell className="title">Município</TableCell>
              <TableCell className="title">Área</TableCell>
              <TableCell className="title">Eixo Temático</TableCell>
              <TableCell className="title">Data do Registro</TableCell>
              <TableCell className="title">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={100}
        rowsPerPage={5}
        page={3}
        onChangePage={() => {}}
        onChangeRowsPerPage={() => {}}
      />
    </Container>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
