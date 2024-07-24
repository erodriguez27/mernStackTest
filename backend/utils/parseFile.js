const csvParser = require('csv-parser')

module.exports.parseCsvFile = (file) => {
  const expectedColumns = file.split('\n')[0].split(',')
  const csvData = { lines: [] }
  const parser = csvParser()

  if (file.split('\n').length > 1) {
    return new Promise((resolve, reject) => {
      parser.on('data', (row) => {
        const hasNoEmptyCell = Object.values(row).every(
          (cell) => cell !== null && cell !== undefined && cell !== ''
        )
        if (
          Object.keys(row).length === expectedColumns.length &&
          hasNoEmptyCell
        ) {
          csvData.file = !csvData.file ? row.file.trim() : csvData.file
          delete row.file
          csvData.lines.push(row)
        }
      })

      parser.on('end', () => {
        resolve(csvData)
      })

      parser.on('error', (error) => {
        reject(error)
      })

      parser.write(file)
      parser.end()
    })
  }
}
