import React, { useState, Fragment, useEffect } from "react";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import ViewStudents from "./ViewStudents";
import { Form, Col } from "react-bootstrap";
import Helper from "../common/Helper";

const Student = () => {
  const initialFormState = {
    id: null,
    student_name: "",
    student_rollno: "",
    student_gender: "",
    student_email: "",
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(Helper.getUrl() + "read.php")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => {
        console.error(error);
      });
  });
  // Setting state

  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [, setLoading] = useState(0);

  // CRUD operations
  const addUser = (user) => {
    //user.id = users.length + 1;
    //setUsers([...users, user]);
    fetch(Helper.getUrl() + "insert.php", {
      method: "POST",
      body: JSON.stringify({
        id: user.id,
        student_name: user.student_name,
        student_rollno: user.student_rollno,
        student_gender: user.student_gender,
        student_email: user.student_email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const deleteUser = (id) => {
    setEditing(false);
    //  setUsers(users.filter(user => user.id !== id));
    fetch(Helper.getUrl() + "delete.php", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setLoading(20);

    //setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    fetch(Helper.getUrl() + "update.php", {
      method: "PUT",
      body: JSON.stringify({
        id: updatedUser.id,
        student_name: updatedUser.student_name,
        student_rollno: updatedUser.student_rollno,
        student_gender: updatedUser.student_gender,
        student_email: updatedUser.student_email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(setLoading(100))
      //.then(error => alert(error))
      .then((json) => console.log(json));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      student_name: user.student_name,
      student_rollno: user.student_rollno,
      student_gender: user.student_gender,
      student_email: user.student_email,
    });
  };

  return (
    <div className="container">
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          {editing ? (
            <Fragment>
              <h2>Edit Student</h2>
              <EditStudent
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Student</h2>
              <AddStudent addUser={addUser} className="containerborder" />
            </Fragment>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <ViewStudents
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </Form.Group>
      </Form.Row>
    </div>
  );
};

export default Student;
