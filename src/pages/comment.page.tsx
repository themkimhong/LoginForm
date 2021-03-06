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

export default function CommentPage() {
  const [data, setData] = useState<Array<any>>();
  useEffect(() => {
    postsService().then((res) => {
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
            <TableCell>Images</TableCell>
            <TableCell align="left">Content</TableCell>
            <TableCell align="left">Post_Id</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {data.title}
              </TableCell>
              <TableCell align="left">{data.content}</TableCell>
              <TableCell align="left">{data.author_id}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}
