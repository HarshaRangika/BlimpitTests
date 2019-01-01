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

describe(spc1 + "Complete Delivery Order By Private User" + spc2, function () {
    it("Test Complete Delivery Order By Private User", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('completeDeliveryOrderByPrivateUser')
            .send({
                "orderId": ""
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

describe(spc1 + "Complete Reservation Or Pickup Order By Retailer" + spc2, function () {
    it("Test Complete Reservation Or Pickup Order By Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('completeReservationOrPickupOrderByRetailer')
            .send({
                "orderId": "",
                "secret": ""
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

describe(spc1 + "Complete Delivery Order By Retailer" + spc2, function () {
    it("Test Complete Delivery Order By Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('completeDeliveryOrderByRetailer')
            .send({
                "orderId": ""
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
