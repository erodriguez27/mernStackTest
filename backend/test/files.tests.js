// const assert = require('assert');
const chai = require("chai");
const sinon = require('sinon');
const chaiHttp = require("chai-http");

const {server} = require('../index');

const should = chai.should();
const assert = chai.assert;
const expect = chai.expect;

chai.use(chaiHttp);

describe("Files endpoint", () => {
  describe("GET /files/data", () => {
    it("should return status 200 and array of files",  (done) => {
      const mockServer = sinon.stub(server, "listen");
      mockServer.yields(null);
      chai
        .request(server)
        .get("/files/data")
        .end((_err, res) => {
          expect(res).to.be.an('object');
          res.should.have.status(200);
          expect(res.body).to.exist;
          expect(res.body.results).to.exist;
          expect(res.body.results).to.be.an('array');
          assert.isAbove(res.body.results.length, 0, 'The returned array must have at least a file');
          mockServer.restore();
          done();
        });
    });
  });
});
