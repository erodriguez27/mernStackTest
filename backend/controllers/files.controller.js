const { getFileInfo, getListOfFiles } = require('../services/files.service')
const { parseCsvFile } = require('../utils/parseFile')

const getFilesWithContent = async (req, res) => {
  const { fileName } = req.query
  let files = fileName ? [fileName] : []

  if (!fileName) {
    const listFiles = await getListOfFiles()
    if (listFiles.files.length > 0) {
      files = listFiles.files
    }
  }

  const results = []
  for (let i = 0; i < files.length; i++) {
    const file = await getFileInfo(files[i])
    if (file?.data) {
      const parsed = await parseCsvFile(file.data)
      if (parsed?.lines.length > 0) {
        results.push(parsed)
      }
    }
  }
  if (results.length === 0) return res.sendStatus(204)

  return res.status(200).json({ results })
}

const listFiles = async (_req, res) => {
  let results = []
  const listFiles = await getListOfFiles()
  if (listFiles.files.length > 0) {
    results = listFiles.files
  }
  if (results.length === 0) return res.sendStatus(204)

  return res.status(200).json({ results })
}

module.exports = {
  getFilesWithContent,
  listFiles
}
