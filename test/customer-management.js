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


describe(spc1 + 'Get All Customer Types' + spc2, function () {
    it('Test Get All Customer Types', function (done) {
        request.get({ url: baseUrl + 'getAllCustomerTypes?{"result":""}' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + "Add Customer Allocation Rules" + spc2, function () {
    it("Test Add Customer Allocation Rules", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addCustomerAllocationRules')
            .send({
                "retailerId": "",
                "rules": [{
                    "type": "",
                    "From": "",
                    "To": ""
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

describe(spc1 + "Add Loyalty Points" + spc2, function () {
    it("Test Add Loyalty Points", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addLoyaltyPoints')
            .send({
                "retailerId": "",
                "customerId": "",
                "points": 0
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

describe(spc1 + "Follow Retailer" + spc2, function () {
    it("Test Follow Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('followRetailer')
            .send({
                "retailerId": "",
                "userId": ""
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

describe(spc1 + "Un Follow Retailer" + spc2, function () {
    it("Test Un Follow Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('unFollowRetailer')
            .send({
                "retailerId": "",
                "userId": ""
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

describe(spc1 + 'Find All Retailers Of Given User With Loyalty Points' + spc2, function () {
    it('Test Find All Retailers Of Given User With Loyalty Points', function (done) {
        request.get({ url: baseUrl + 'findAllRetailersOfGivenUserWithLoyaltyPoints?{ "retailerId":"", "customerId":"", "points":0 }' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Loyalty Points Of A Given User Of Given Retailer' + spc2, function () {
    it('Test Get Loyalty Points Of A Given User Of Given Retailer', function (done) {
        request.get({ url: baseUrl + 'getLoyaltyPointsOfAGivenUserOfGivenRetailer?userId=#&retailerId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Find Customers' + spc2, function () {
    it('Test Find Customers', function (done) {
        request.get({ url: baseUrl + 'findCustomers?type=#&retailerId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Following Customers' + spc2, function () {
    it('Test Get Following Customers', function (done) {
        request.get({ url: baseUrl + 'getFollowingCustomers?retailerId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Following Retailers' + spc2, function () {
    it('Test Get Following Retailers', function (done) {
        request.get({ url: baseUrl + 'getFollowingRetailers?userId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});