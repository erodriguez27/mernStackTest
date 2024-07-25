import React from "react";

export const getTableBody = (files) => {
  if (files.length === 0) {
    return <tbody></tbody>;
  }
  return (
    <tbody>
      {files.map((file) => {
        return file.lines.map((line) => (
          <tr>
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
