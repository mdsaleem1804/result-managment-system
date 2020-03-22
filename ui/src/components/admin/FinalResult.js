import React, { useState, Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
const FinalResult = props => {
  const initialFormState = {
    id: null,
    student_rollno: "",
    total: ""
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:8080/spiro_2020/result-managment-system/api/final_result.php"
    )
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => {
        console.error(error);
      });
  });
  // Setting state

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
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.student_rollno}>
                <td>{user.student_rollno}</td>
                <td>{user.student_name}</td>
                <td>{user.total}</td>
                <td>{user.rank}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Entries</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default FinalResult;
