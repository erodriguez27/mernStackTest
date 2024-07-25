import React, { useState, useEffect } from "react";

import { FileTable } from "../components/FileTable.component";
import { LoadSpinner } from "../components/Spinner.component";

import { getFilesData } from "../services/toolbox.service";

const HomePage = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [files, setFiles] = useState();

  useEffect(() => {
    getFilesData().then((res) => {
      if (res?.results) {
        setFiles(res.results);
        setShowSpinner(false);
      }
    });
  }, []);
  if (showSpinner) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <>
      <FileTable
        files={files}
        showSpinner={showSpinner}
        setShowSpinner={setShowSpinner}
      ></FileTable>
    </>
  );
};

export default HomePage;
