import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
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
          <select
            name="student_gender"
            value={user.student_gender}
            onChange={handleInputChange}
          >
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
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
