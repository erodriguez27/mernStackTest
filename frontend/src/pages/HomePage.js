import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FileTable } from "../components/FileTable.component";
import { LoadSpinner } from "../components/Spinner.component";
import { getFilesData } from "../services/toolbox.service";
import { setFiles } from "../store/slices/files.slice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state.filesReducer.files);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFilesData();
        if (response?.results) {
          await dispatch(setFiles(response.results));
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <>
      <FileTable
        files={files}
        showSpinner={isLoading}
        setShowSpinner={setIsLoading}
      ></FileTable>
    </>
  );
};

export default HomePage;
