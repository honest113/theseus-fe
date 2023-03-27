import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";
import { adminRetrieveListCompany } from "../../apis/company/companyApi";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { loadListCompany } from "../../redux/slices/company/CompanySlice";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { id: "name", label: "Company Name", minWidth: 100 },
  { id: "phoneNumber", label: "Phone Number", minWidth: 80, align: "center" },
  {
    id: "manageCatalogue",
    label: "Manage Catalogue",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "status",
    label: "Status",
    minWidth: 80,
    align: "center",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2)
  },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2)
  },
  {
    id: "action",
    label: "Action",
    minWidth: 60,
    align: "center",
    format: (value) => value.toFixed(2)
  }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "gray",
    color: "white"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

function createData(
  name = "",
  phoneNumber = "",
  manageCatalogue = "",
  status = "ACTIVE",
  address = "",
  description = "",
  action = ""
) {
  return {
    name,
    phoneNumber,
    manageCatalogue,
    status,
    address,
    description,
    action
  };
}

const createRowData = (data) => {
  const rows = data.map((item) =>
    createData(
      item.name,
      item.phoneNumber,
      item.manageCatalogue,
      item.status,
      item.address,
      item.description,
      item.action
    )
  );
  return rows;
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)"
    }
  }
});

const TableItems = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const listCompany = useSelector((state) => state.company.listCompany);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getListCompany = async () => {
    const res = await adminRetrieveListCompany();
    if (res.data.success) {
      dispatch(loadListCompany(res.data.data));
    }
  };

  useEffect(() => {
    getListCompany();
  }, []);

  useEffect(() => {
    setRows(createRowData(listCompany));
  }, [listCompany]);

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        if (column.id === "action") {
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              <Button
                                align={column.align}
                                variant="outlined"
                                size="small"
                                color="info"
                              >
                                Detail
                              </Button>
                              <Button
                                align={column.align}
                                variant="outlined"
                                size="small"
                                color="success"
                              >
                                Edit
                              </Button>
                            </StyledTableCell>
                          );
                        } else {
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </StyledTableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default TableItems;
