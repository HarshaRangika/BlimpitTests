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

module.exports = this;

describe(spc1 + "Initiate Payment Sampath IPG" + spc2, function () {
    it("Test Initiate Payment Sampath IPG", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('initiatePaymentForOrders/sampathIPG')
            .send({
                "orders": ["", ""],
                "returnUrl": "",
                "cancelUrl": "",
                "saveCard": true
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

describe(spc1 + "Execute Payment Sampath IPG" + spc2, function () {
    it("Test Execute Payment Sampath IPG", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('executePaymentForOrders/sampathIPG')
            .send({
                "clientRef": "",
                "reqid": ""
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

describe(spc1 + "Pay With Token Sampath IPG" + spc2, function () {
    it("Test Pay With Token Sampath IPG", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('payWithToken/sampathIPG')
            .send({
                "orders": ["", ""],
                "token": "",
                "expiry": "SSSS"
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