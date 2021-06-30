import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { postsService } from "../services/post.service";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PostPage() {
  const [data, setData] = useState<Array<any>>();
  useEffect(() => {
    postsService().then((res) => {
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
            <TableCell>Title</TableCell>
            <TableCell align="left">Content</TableCell>
            <TableCell align="left">Auth-ID</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Creat_At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {data.title}
              </TableCell>
              <TableCell align="left">{data.content}</TableCell>
              <TableCell align="left">{data.author_id}</TableCell>
              <TableCell align="left">{data.description}</TableCell>
              <TableCell align="left">{data.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
