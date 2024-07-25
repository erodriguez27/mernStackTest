import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

/**
 * 
 * Component to capture the filename to find using fileName query param.
 * 
 * @param {String} fileName : name of the current file indicated by user.
 * @param {Function} setFileName : function to set the new value of fileName
 * @returns jsx of component
 */
export const InputSearch = ({ fileName, setFileName }) => {
  const [searchText, setSearchText] = useState(fileName);
  const setSearchValue = (value) => setSearchText(value);
  const handleButtonClick = () => {
    if (searchText !== fileName) {
      setFileName(searchText);
    }
  };

  return (
    <div className="toolbar">
      <InputGroup>
        <FormControl
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={() => handleButtonClick()}>
          Buscar
        </Button>{" "}
         
      </InputGroup>
    </div>
  );
};
