const echoServeClient = require("../clients/echoServ.client");

const getListOfFiles = () =>
  echoServeClient
    .get("/files")
    .then((res) => res.data)
    .catch((_err) => console.log("error getting files"));

const getFileInfo = (fileName) =>
  echoServeClient
    .get(`/file/${fileName}`, { responseType: 'text' })
    .then((res) => res)
    .catch((_err) => console.log(`error getting file (${fileName}) info`));

module.exports = {
  getListOfFiles,
  getFileInfo,
};
