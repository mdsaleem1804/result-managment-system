import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const AddStudent = (props) => {
  const initialFormState = {
    id: null,
    student_name: "",
    student_rollno: "",
    student_gender: "",
    student_email: "",
  };
  const [user, setUser] = useState(initialFormState);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !user.student_name ||
      !user.student_rollno ||
      !user.student_gender ||
      !user.student_email
    )
      return;

    props.addUser(user);
    setUser(initialFormState);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="Student Name"
            color="primary"
            name="student_name"
            value={user.student_name}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="Student RollNo"
            color="primary"
            name="student_rollno"
            value={user.student_rollno}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            name="student_gender"
            onChange={handleInputChange}
            fullWidth
            value={user.student_gender}
          >
            <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="Student Email"
            color="primary"
            name="student_email"
            value={user.student_email}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button type="submit" color="secondary" variant="contained">
            Add New Student
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddStudent;
