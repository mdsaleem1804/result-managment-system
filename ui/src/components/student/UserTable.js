import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Roll No</th>
        <th>Gender </th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.student_name}</td>
            <td>{user.student_rollno}</td>
            <td>{user.student_gender}</td>
            <td>{user.student_email}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
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
);

export default UserTable;
