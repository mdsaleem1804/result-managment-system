import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import SaveIcon from "@material-ui/icons/Save";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const ViewStudents = (props) => (
  <div>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Roll No</TableCell>
            <TableCell>Gender </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <TableRow key={user.student_name}>
                <TableCell component="th" scope="row">
                  {user.student_name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.student_rollno}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.student_gender}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.student_email}
                </TableCell>
                <TableCell component="th" scope="row">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined secondary button group"
                  >
                    <Button
                      color="primary"
                      onClick={() => {
                        props.editRow(user);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => props.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                <LoadingSpinner />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default ViewStudents;
