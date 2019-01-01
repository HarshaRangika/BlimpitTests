const should = require('should');
const request = require('request');
const expect = require('chai').expect;
const assert = require('assert');

var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

const baseUrl = 'http://localhost:3000/';
const util = require('util');
const parser = require('json-parser');
var jp = require('jsonpath'); //https://www.npmjs.com/package/jsonpath

var spc1 = ' \n \n |:------( Test : ';
var spc2 = ' )------------------------------------------:| \n \n ';


describe("Test Post...", function () {
    it("Shud test", function (done) {
        chai.request("baseUrl")
            .post("apiFunction")
            .send({ "json": "object" })
            .end(function (error, response) {

                if (error) {
                    should.equal(200);
                    console.log("Response Error : " + error);
                } else {
                   // should.equal("");
                }

                done();
            });
    });
});

describe("Test Get...", function () {
    it("Test Get", function (done) {

        request.get({ url: baseUrl + "getAllCategories" }, function (error, response, body) {
            if (error) {
                    console.log(body);
            } else {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            }
        });
    });
});