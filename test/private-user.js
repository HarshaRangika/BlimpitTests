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


describe(spc1 + "Add Private User Profile" + spc2, function () {
    it("Test Add Private User Profile", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addPrivateUserProfile')
            .send({
                "id": "",
                "session": "Session Object..???"
            })
            .end(function (err, res) {

                if (err) {
                    // console.log('Post Method error : ' + err);
                    assert.fail(err);
                } else if (res != null) {
                    console.log('res is ok');
                    console.log(res.body);
                    expect(res.statusCode).to.equal(200);
                } else {
                    assert.fail('Response is null.');
                }
                done();
            });
    });

});

describe(spc1 + "Upload Profile Or Cover Photo" + spc2, function () {
    it("Test Upload Profile Or Cover Photo", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('uploadProfileOrCoverPhoto')
            .send({
                id: '??????????'
            })
            .end(function (err, res) {

                if (err) {
                    // console.log('Post Method error : ' + err);
                    assert.fail(err);
                } else if (res != null) {
                    console.log('res is ok');
                    console.log(res.body);
                    expect(res.statusCode).to.equal(200);
                } else {
                    assert.fail('Response is null.');
                }
                done();
            });
    });

});