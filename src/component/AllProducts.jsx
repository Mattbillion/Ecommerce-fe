import { Table } from "react-bootstrap";
import "./Basic.css"
export default function AllProducts() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Sale</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>URL</td>
          <td>Iphone 13</td>
          <td>3.500.000₮</td>
          <td>Apple</td>
          <td>Phone</td>
          <td>10%</td>
          <td>
            <button className="edit-btn">Edit</button>
            <span>/</span>
            <button className="delete-btn">Delete</button>
          </td>
        </tr>
        <tr>
          <td>URL</td>
          <td>Iphone 13</td>
          <td>3.500.000₮</td>
          <td>Apple</td>
          <td>Phone</td>
          <td>10%</td>
          <td>
            <button className="edit-btn">Edit</button>
            <span>/</span>
            <button className="delete-btn">Delete</button>
          </td>
        </tr>
        <tr>
          <td>URL</td>
          <td>Iphone 13</td>
          <td>3.500.000₮</td>
          <td>Apple</td>
          <td>Phone</td>
          <td>10%</td>
          <td>
            <button className="edit-btn">Edit</button>
            <span>/</span>
            <button className="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}