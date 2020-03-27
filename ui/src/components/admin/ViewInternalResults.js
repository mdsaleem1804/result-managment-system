import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import LoadingSpinner from "../common/LoadingSpinner";
const ViewInternalResults = props => {
  const [users, setUsers] = useState([]);
  console.log(props.match.params.id);
  useEffect(() => {
    fetch(
      "http://localhost:8080/spiro_2020/result-managment-system/api/read_result_entry.php"
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
      <h1>Internal Exam {props.match.params.id} Results</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Student Roll No</th>
            <th>Exam Type</th>
            <th>Subject1</th>
            <th>Subject2 </th>
            <th>Subject3 </th>
            <th>Subject4</th>
            <th>Subject5 </th>
            <th>Subject6 </th>
            <th>Total </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users
              .filter(function(user) {
                return (
                  user.exam_type === "InternalExam" + props.match.params.id
                ); // filters and returns a new array
              })
              .map(user => (
                <tr key={user.id}>
                  <td>{user.student_rollno}</td>
                  <td>{user.exam_type}</td>
                  <td>{user.subject1}</td>
                  <td>{user.subject2}</td>
                  <td>{user.subject3}</td>
                  <td>{user.subject4}</td>
                  <td>{user.subject5}</td>
                  <td>{user.subject6}</td>
                  <td>{user.total}</td>
                  <td>
                    <button
                      onClick={() => props.deleteUser(user.id)}
                      className="button  muted-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
          ) : (
            <LoadingSpinner />
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default ViewInternalResults;
