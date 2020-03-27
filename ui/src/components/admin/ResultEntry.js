import React, { useState, Fragment, useEffect } from "react";
import AddResultEntry from "./AddResultEntry";
import EditUserForm from "../student/EditUserForm";
import ViewResultEntry from "./ViewResultEntry";
import { Form, Col } from "react-bootstrap";
import LoadingSpinner from "../common/LoadingSpinner";
const Student = () => {
  const initialFormState = {
    id: null,
    student_rollno: "",
    subject1: "",
    subject2: "",
    subject3: "",
    subject4: "",
    subject5: "",
    subject6: "",
    total: ""
  };
  const [users, setUsers] = useState([]);

  // Setting state

  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [loadingResults, setLoadingResults] = useState(true);

  // CRUD operations
  useEffect(() => {
    fetch(
      "http://localhost:8080/spiro_2020/result-managment-system/api/read_result_entry.php"
    )
      .then(response => response.json())
      .then(json => setUsers(json))
      .then(setLoadingResults(false))
      .catch(error => {
        console.error(error);
      });
  });
  const addUser = user => {
    console.log(user);
    //user.id = users.length + 1;
    //setUsers([...users, user]);
    fetch(
      "http://localhost:8080/spiro_2020/result-managment-system/api/insert_result_entry.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: user.id,
          student_rollno: user.student_rollno,
          exam_type: user.exam_type,
          subject1: user.subject1,
          subject2: user.subject2,
          subject3: user.subject3,
          subject4: user.subject4,
          subject5: user.subject5,
          subject6: user.subject6
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => response.json())
      .then(json => console.log(json));
  };
  const deleteUser = id => {
    setEditing(false);
    //  setUsers(users.filter(user => user.id !== id));
    fetch(
      "http://localhost:8080/spiro_2020/result-managment-system/api/delete_result_entry.php",
      {
        method: "DELETE",
        body: JSON.stringify({
          id: id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => response.json())
      .then(json => console.log(json));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    //setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    fetch(
      "http://localhost:8080/spiro_2020/result-managment-system/api/update.php",
      {
        method: "PUT",
        body: JSON.stringify({
          id: updatedUser.id,
          student_rollno: updatedUser.student_rollno,
          subject1: updatedUser.subject1,
          subject2: updatedUser.subject2,
          subject3: updatedUser.subject3,
          subject4: updatedUser.subject4,
          subject5: updatedUser.subject5,
          subject6: updatedUser.subject6
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => response.json())
      //.then(error => alert(error))
      .then(json => console.log(json));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      student_name: user.student_name,
      exam_type: user.exam_type,
      subject1: user.subject1,
      subject2: user.subject2,
      subject3: user.subject3,
      subject4: user.subject4,
      subject5: user.subject5,
      subject6: user.subject6
    });
  };

  return (
    <div className="container">
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          {editing ? (
            <Fragment>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Result Entry</h2>
              <AddResultEntry addUser={addUser} users={users} />
            </Fragment>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <h2>View Result Entry</h2>

          {loadingResults === true ? (
            <div>
              <br />
              <LoadingSpinner />
            </div>
          ) : (
            <ViewResultEntry
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          )}
        </Form.Group>
      </Form.Row>
    </div>
  );
};

export default Student;
