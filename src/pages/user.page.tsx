import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { usersService } from "../services/user.service";
import { PostPage } from "./post.page"
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function UserPage() {
  const [data, setData] = useState<Array<any>>();
  useEffect(() => {
    usersService().then((res) => {
      //@ts-ignore
      setData(res.data.data);
    });
  }, []);

  console.log("data", data);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>E-mail</TableCell>
            <TableCell align="left">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {data.email}
              </TableCell>
              <TableCell align="left">{data.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
