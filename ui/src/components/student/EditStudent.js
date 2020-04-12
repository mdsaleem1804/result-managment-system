import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const EditStudent = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
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
            Update Student
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={() => props.setEditing(false)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditStudent;
