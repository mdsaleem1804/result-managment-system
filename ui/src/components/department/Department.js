import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  ButtonToolbar,
  Button,
  Table,
} from "rsuite";
const { Column, HeaderCell, Cell, Pagination } = Table;
class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          city: "Computer Science",
        },
        {
          id: 2,
          city: "Information Technology",
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
            <ControlLabel>Department Name</ControlLabel>
            <FormControl name="username" style={{ width: 260 }} />
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
            <HeaderCell>Department Name</HeaderCell>
            <Cell dataKey="city" />
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

export default Department;
