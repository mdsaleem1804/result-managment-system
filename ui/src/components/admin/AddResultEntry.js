import React, { useState, useEffect } from "react";
import { Form, Col, Container } from "react-bootstrap";
import LoadingSpinner from "../common/LoadingSpinner";
const AddResultEntry = props => {
  const initialFormState = {
    id: null,
    student_rollno: "",
    exam_type: "",
    subject1: "",
    subject2: "",
    subject3: "",
    subject4: "",
    subject5: "",
    subject6: ""
  };
  const [user, setUser] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const [rollNo, setRollNo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let initialRollNo = [];
    fetch(
      "http://localhost:8080/spiro_2020/result-managment-system/api/read.php"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        initialRollNo = data.map(planet => {
          return planet;
        });
        setRollNo(initialRollNo);
        setLoading(false);
      });
  });
  let optionItems = rollNo.map(user => (
    <option key={user.student_name}>{user.student_rollno}</option>
  ));
  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <Container>
        <Form
          onSubmit={event => {
            event.preventDefault();
            if (
              !user.student_rollno ||
              !user.exam_type ||
              !user.subject1 ||
              !user.subject2 ||
              !user.subject3 ||
              !user.subject4 ||
              !user.subject5 ||
              !user.subject6
            )
              return;

            props.addUser(user);
            setUser(initialFormState);
          }}
        >
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Student RollNo</Form.Label>
              <select
                name="student_rollno"
                value={user.student_rollno}
                onChange={handleInputChange}
              >
                {optionItems}
              </select>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Exam Type</Form.Label>
              <select name="exam_type" onChange={handleInputChange}>
                <option>Select</option>
                <option>InternalExam1</option>
                <option>InternalExam2</option>
                <option>InternalExam3</option>
              </select>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="2">
              <Form.Label>Subject1</Form.Label>
              <input
                type="number"
                required
                name="subject1"
                value={user.subject1}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Subject2</Form.Label>
              <input
                type="number"
                required
                name="subject2"
                value={user.subject2}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Subject3</Form.Label>
              <input
                type="number"
                required
                name="subject3"
                value={user.subject3}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Subject4</Form.Label>
              <input
                type="number"
                required
                name="subject4"
                value={user.subject4}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Subject5</Form.Label>
              <input
                type="number"
                required
                name="subject5"
                value={user.subject5}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Subject6</Form.Label>
              <input
                type="number"
                required
                name="subject6"
                value={user.subject6}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="3">
              <button>Add Result</button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    );
  }
};
export default AddResultEntry;
