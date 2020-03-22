import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

const AddUserForm = props => {
  const initialFormState = {
    id: null,
    student_name: "",
    student_rollno: "",
    student_gender: "",
    student_email: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        /* console.log(user.student_name);
        console.log(user.student_rollno);
        console.log(user.student_gender);
        console.log(user.student_email);*/
        if (
          !user.student_name ||
          !user.student_rollno ||
          !user.student_gender ||
          !user.student_email
        )
          return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Student Name</Form.Label>

          <input
            type="text"
            required
            name="student_name"
            value={user.student_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Student RollNo</Form.Label>
          <input
            type="text"
            required
            name="student_rollno"
            value={user.student_rollno}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Gender</Form.Label>
          <select name="student_gender" onChange={handleInputChange}>
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <input
            type="text"
            required
            name="student_email"
            value={user.student_email}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="3">
          <button>Add New Student</button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default AddUserForm;
