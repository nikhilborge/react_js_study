import React from "react";
import { Table } from "react-bootstrap";
function MapFunction(props) {
  

  return (
    
    <div>
      <h2>Handle array with map function</h2>
      <Table border="1" striped hover variant="dark">
        <tbody>
          <tr>
            <td>Name </td>
            <td>Mobile </td>
            <td> Email</td>
          </tr>
          {props.data .map((item, i) =>
            item.mobile === 111 ? (
              <tr key={i}>
                <td> {item.name} </td>
                <td> {item.mobile} </td>
                <td> {item.email} </td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default MapFunction;
