import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Helper from "../common/Helper";
const FinalResult = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(Helper.getUrl() + "final_result.php")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => {
        console.error(error);
      });
  });
  // Setting state
  let usersList;
  if (users.length === 0) {
    usersList = (
      <tr>
        <td>No users</td>
      </tr>
    );
  } else {
    if (users.length > 0) {
      usersList = users.map((user) => (
        <tr key={user.student_rollno}>
          <td>{user.student_rollno}</td>
          <td>{user.student_name}</td>
          <td>{user.total}</td>
          <td>{user.rank}</td>
        </tr>
      ));
    } else {
      usersList = (
        <tr>
          <td>No users</td>
        </tr>
      );
    }
  }
  return (
    <Container>
      <br />
      <table>
        <thead>
          <tr>
            <th>Student Roll No</th>
            <th>Student Name</th>
            <th>Total </th>
            <th>Rank </th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    </Container>
  );
};

export default FinalResult;
