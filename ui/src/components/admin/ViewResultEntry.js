import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
const ViewResultEntry = props => (
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
      {props.users.length > 0 ? (
        props.users.map(user => (
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
);

export default ViewResultEntry;
