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


describe(spc1 + "Landing Page Decorator" + spc2, function () {
    it("Test LandingPage Decorator", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('landingPageDecorator')
            .send({
                "id": "",
                "baseLocation": {
                    "latitude": 0,
                    "longitude": 0
                },
                "ratios": [{
                    "numerator": 0,
                    "denominator": 0
                }]
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

describe(spc1 + "Get Landing Page Items Of Retailer" + spc2, function () {
    it("Test Get Landing Page Items Of Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('getLandingPageItemsOfRetailer')
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