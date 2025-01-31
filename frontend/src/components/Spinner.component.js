import React from "react";

import Spinner from "react-bootstrap/Spinner";

/**
 * 
 * Component that renders a spinner to indicate that the files are loading
 * 
 * @returns jsx of the spinner
 */
export const LoadSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
