import React, { useState, useEffect } from "react";

import { FileTable } from "../components/FileTable.component";
import { InputSearch } from "../components/InputSearch.component";
import { LoadSpinner } from "../components/Spinner.component";
import { getFilesData } from "../services/toolbox.service";
import { setFiles } from "../store/slices/files.slice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";

/**
 * 
 * Main page of the app, loads the files and renders the table
 * 
 */
const HomePage = () => {
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state.filesReducer.files);
  const [isLoading, setIsLoading] = useState(true);
  const [fileName, setFileName] = useState();
  const fetchData = async () => {
    try {
      const response = await getFilesData(fileName);
      let results = [];
      if (response?.results) {
        results = response.results;
      }
      await dispatch(setFiles(results));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [fileName, dispatch]);

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <>
      <InputSearch fileName={fileName} setFileName={setFileName}/>
      <FileTable
        files={files}
        showSpinner={isLoading}
        setShowSpinner={setIsLoading}
      ></FileTable>
    </>
  );
};

export default HomePage;
