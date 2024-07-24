const chai = require('chai')

const { parseCsvFile } = require('../../utils/parseFile')

const should = chai.should()
const assert = chai.assert
const expect = chai.expect

describe('ParseCsvFile', () => {
  it('Should parse csv string to json', async () => {
    const csv = `file,text,number,hex
        file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765
        file1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5
        file1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3e29651a63a5202a5661e05a060401fb
        file1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252`
    const parsedCsv = await parseCsvFile(csv)
    parsedCsv.should.be.an('object')
    expect(parsedCsv.file).to.exist
    expect(parsedCsv.file).to.be.an('string')
    parsedCsv.file.should.equal('file1.csv')
    parsedCsv.lines.should.be.an('array')
    assert.isAbove(parsedCsv.lines.length, 0)
    parsedCsv.lines[0].should.be.an('object')
    Object.keys(parsedCsv.lines[0]).length.should.be.equal(3)
  })
})
