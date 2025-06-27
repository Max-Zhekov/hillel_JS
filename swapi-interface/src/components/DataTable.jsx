import { Table } from "react-bootstrap";

const DataTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Ім’я</th>
          <th>Деталі 1</th>
          <th>Деталі 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Luke Skywalker</td>
          <td>Human</td>
          <td>Tatooine</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Darth Vader</td>
          <td>Sith</td>
          <td>Tatooine</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DataTable;
