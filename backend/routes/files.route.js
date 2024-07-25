'use strict'

const express = require('express')
const filesController = require('../controllers/files.controller')
const router = express.Router()

module.exports = function () {
  /**
 * @swagger
 * components:
 *   schemas:
 *     Line:
 *       type: object
 *       required:
 *         - text
 *         - number
 *         - hex
 *       properties:
 *         text:
 *           type: string
 *           description: string of variable length
 *         number:
 *           type: number
 *           description: a number
 *         hex:
 *           type: string
 *           description: hexadecimal number of 32 digits
 *       example:
 *         text: "UjKiAzsAuGMBiguOGUstgzGMEQHVXU"
 *         number: 4737
 *         hex: "9b7a03c25453c9ccd9f7cfc70d3b8320"
 */

  /**
  * @swagger
  * components:
  *   schemas:
  *     File:
  *       type: object
  *       required:
  *         - file
  *         - lines
  *       properties:
  *         file:
  *           type: string
  *           description: name of the file
  *         lines:
  *           type: array
  *           items:
  *             $ref: '#/components/schemas/Line'
  *       example:
  *         file: test2.csv
  *         lines: [
  *           { text: "UjKiAzsAuGMBiguOGUstgzGMEQHVXU", number: 4737, hex: "9b7a03c25453c9ccd9f7cfc70d3b8320" },
  *           { text: "fxYlaePrJDMidmqbWzbp", number: 5, hex: "766299e2f352e31201de4220fe1cbe65" }
  *         ]
  */

  /**
   * @swagger
   *
   * /files/data:
   *    get:
   *      summary: Get files
   *      description: Makes request to external api to retrieve list of files and information for each file
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: fileName
   *          type: string
   *          in: path
   *          description: when present the api will return only the information about the requested file
   *          required: false
   *      responses:
   *        200:
   *          description: the execution was successfull, it returns a list with the information of the files found
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                required:
   *                  - results
   *                properties:
   *                  results:
   *                    type: array
   *                    items:
   *                      $ref: '#/components/schemas/File'
   *      
   */
  router.get("/data", (req, res) => {
    filesController.getFilesWithContent(req, res);
  });

  /**
  * @swagger
  * components:
  *   schemas:
  *     FileList:
  *       type: array
  *       items:
  *         type: string
  *       example:
  *         [
  *           "test1.csv", "test2.csv", "test3.csv", "test18.csv", "test4.csv", "test5.csv", "test6.csv", "test9.csv", "test15.csv"
  *         ]
  */
 
  /**
   * @swagger
   *
   * /files/list:
   *   get:
   *      summary: Get list of files
   *      description: Makes request to external api to retrieve list of files, returning only list of filenames
   *      responses:
   *        200:
   *          description: the execution was successfull, returns a list of filenames
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                required:
   *                  - results
   *                properties:
   *                  results:
   *                    $ref: '#/components/schemas/FileList'
   */
  router.get("/list", (req, res) => {
    filesController.listFiles(req, res);
  });

  return router;
}
