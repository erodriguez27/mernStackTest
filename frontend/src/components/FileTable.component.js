import React from "react";

import Table from "react-bootstrap/Table";

import { getTableBody } from "./getTableBody";

const columns = ["File Name", "Text", "Number", "Hex"];

export const FileTable = ({ files }) => {
  return (
    <div className="my-table" style={{ width: "800px" }}>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            {columns.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        {getTableBody(files)}
      </Table>
    </div>
  );
};
