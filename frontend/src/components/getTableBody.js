import React from "react";

/**
 * 
 * Function that map the files array to form rows of a table.
 * 
 * @returns jsx representing body of the table
 */
export const getTableBody = (files) => {
  if (!files?.length) {
    return <tbody></tbody>;
  }
  return (
    <tbody>
      {files.map((file) => {
        return file.lines.map((line, idx) => (
          <tr key={`${file.file}-${idx}`}>
            <th>{file.file}</th>
            <th>{line.text}</th>
            <th>{line.number}</th>
            <th>{line.hex}</th>
          </tr>
        ));
      })}
    </tbody>
  );
};
