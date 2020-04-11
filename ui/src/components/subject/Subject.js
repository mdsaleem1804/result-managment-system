import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Table,
} from "rsuite";
const { Column, HeaderCell, Cell } = Table;
class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          subject_code: "CS101",
          subject_name: "Java",
        },
        {
          id: 2,
          subject_code: "CS102",
          subject_name: "PHP",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <Form layout="inline">
          <FormGroup>
            <ControlLabel>Subject Code</ControlLabel>
            <FormControl name="subject_code" style={{ width: 260 }} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Subject Name</ControlLabel>
            <FormControl name="subject_name" style={{ width: 260 }} />
          </FormGroup>
          <Button color="green">Save</Button>
        </Form>
        <hr />
        <Table
          height={400}
          data={this.state.data}
          onRowClick={(data) => {
            console.log(data);
          }}
        >
          <Column width={70} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={200} fixed>
            <HeaderCell>Subject Code</HeaderCell>
            <Cell dataKey="subject_code" />
          </Column>
          <Column width={200} fixed>
            <HeaderCell>Subject Name</HeaderCell>
            <Cell dataKey="subject_name" />
          </Column>
          <Column width={120} fixed="right">
            <HeaderCell>Action</HeaderCell>

            <Cell>
              {(rowData) => {
                function handleAction() {
                  alert(`id:${rowData.id}`);
                }
                return (
                  <span>
                    <a onClick={handleAction}> Edit </a> |{" "}
                    <a onClick={handleAction}> Remove </a>
                  </span>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </div>
    );
  }
}

export default Subject;
