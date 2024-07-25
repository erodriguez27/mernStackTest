import { toolboxClient } from "../clients/toolbox.client";

export const getFilesData = async () => {
  try {
    const files = await toolboxClient.get("/files/data");
    if (files?.data) {
      return files.data;
    }
  } catch (err) {
    console.log("error getting files ", err);
  }
};
