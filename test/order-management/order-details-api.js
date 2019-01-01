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

describe(spc1 + 'Get Retailer Orders' + spc2, function () {
    it('Test Get Retailer Orders', function (done) {
        request.get({ url: baseUrl + 'getRetailerOrders?skip=0&limit=1' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + "Get Order Details" + spc2, function () {
    it("Test Get Order Details", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('getOrderDetails')
            .send({
                "retailerId": "",
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

describe(spc1 + 'Get Private User Orders' + spc2, function () {
    it('Test Get Private User Orders', function (done) {
        request.get({ url: baseUrl + 'getPrivateUserOrders?skip=0&limit=1' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});