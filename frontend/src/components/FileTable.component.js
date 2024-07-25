import React from "react";

import Table from "react-bootstrap/Table";

import { getTableBody } from "./getTableBody";

const columns = ["File Name", "Text", "Number", "Hex"];

/**
 * 
 * Component that renders a table containing the data of the files received
 * 
 * @param {array} files : Array containing the information of files, each file follows the format: {file: string, lines:array of lines with the content of the file}
 * @param {Function} setFileName : function to set the new value of fileName
 * @returns jsx of the table
 */
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
