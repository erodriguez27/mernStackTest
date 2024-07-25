import { toolboxClient } from "../clients/toolbox.client";

export const getFilesData = async (fileName) => {
  try {
    console.log(fileName)
    const files = await toolboxClient.get(
      "/files/data" + (fileName ? `?fileName=${fileName}` : "")
    );
    if (files?.data) {
      return files.data;
    }
  } catch (err) {
    console.log("error getting files ", err);
  }
};
