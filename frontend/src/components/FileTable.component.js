import React from "react";

import Table from "react-bootstrap/Table";

import { getTableBody } from "./getTableBody";

const columns = ["File Name", "Text", "Number", "Hex"];

export const FileTable = ({ files }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {columns.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        {getTableBody(files)}
      </Table>
    </>
  );
};
