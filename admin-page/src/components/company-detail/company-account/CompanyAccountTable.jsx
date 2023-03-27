import styled from "@emotion/styled";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { adminRetrieveListCompanyAccount } from "../../../apis/company-account/companyAccountApi";

const columns = [
  { id: "userName", label: "User name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 80, align: "center" },
  {
    id: "status",
    label: "Status",
    minWidth: 80,
    align: "center",
    format: (value) => value.toLocaleString("en-US")
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

function createData(userName = "", email = "", status = "") {
  return {
    userName,
    email,
    status
  };
}

const createRowData = (data) => {
  const rows = data.map((item) =>
    createData(item.userName, item.email, item.status)
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

const CompanyAccountTable = ({ company }) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [companyAccount, setListCompanyAccount] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getListCompanyAccount = async () => {
    setListCompanyAccount([]);
    const res =
      company.companyId &&
      (await adminRetrieveListCompanyAccount(company.companyId));
    if (res.data.success) {
      setListCompanyAccount(res.data.data);
      setRows(createRowData(res.data.data));
    }
  };

  useEffect(() => {
    getListCompanyAccount();
  }, [company.companyId]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "action") {
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
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
                          <StyledTableCell key={column.id} align={column.align}>
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
  );
};

export default CompanyAccountTable;
