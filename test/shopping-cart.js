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


describe(spc1 + "Add To Cart" + spc2, function () {
    it("Test Add To Cart", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addToCart')
            .send({
                "products": [{
                    "productId": "",
                    "variationId": "",
                    "quantity": 0
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

describe(spc1 + "Remove From Cart" + spc2, function () {
    it("Test Remove From Cart", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('removeFromCart')
            .send({
                "products": [{
                    "productId": "",
                    "variationId": "",
                    "quantity": 0
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

describe(spc1 + "Clear Cart" + spc2, function () {
    it("Test Clear Cart", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('clearCart')
            .send({

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

describe(spc1 + 'Get Cart Items' + spc2, function () {
    it('Test Get Cart Items', function (done) {
        request.get({ url: baseUrl + 'getCartItems' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + "Add To Temporary Cart" + spc2, function () {
    it("Test Add To Temporary Cart", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addToTemporaryCart')
            .send({
                "products": [{
                    "productId": "",
                    "variationId": "",
                    "quantity": 0
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

describe(spc1 + "Remove From Temporary Cart" + spc2, function () {
    it("Test Remove From Temporary Cart", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('removeFromTemporaryCart')
            .send({
                "products": [{
                    "productId": "",
                    "variationId": "",
                    "quantity": 0
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

describe(spc1 + "Clear Temporary Cart" + spc2, function () {
    it("Test Clear Temporary Cart", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('clearTemporaryCart')
            .send({
                
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

describe(spc1 + 'Get Temporary Cart Items' + spc2, function () {
    it('Test Get Temporary Cart Items', function (done) {
        request.get({ url: baseUrl + 'getTemporaryCartItems' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});