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


describe(spc1 + "Register Device" + spc2, function () {
    it("Test Register Device", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('registerDevice')
            .send({
                "id": "",
                "firebaseToken": "",
                "firebaseOldToken": ""
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

describe(spc1 + "Send Message To Given Device" + spc2, function () {
    it("Test Send Message To Given Device", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('sendMessageToGivenDevice')
            .send({
                "receiverId": "",
                "data": {
                    "msg": ""
                }
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

describe(spc1 + "Subscribe To Topic" + spc2, function () {
    it("Test Subscribe To Topic", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('subscribeToTopic')
            .send({
                "subscribingTopic": "",
                "id": ""
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

describe(spc1 + "Send Message To Topic" + spc2, function () {
    it("Test Send Message To Topic", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('sendMessageToTopic')
            .send({
                "topicId": "",
                "data": {
                    "msg": ""
                }
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

describe(spc1 + "Unsubscribe From Topic" + spc2, function () {
    it("Test Unsubscribe From Topic", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('unsubscribeFromTopic')
            .send({
                "unsubscribingTopic": "",
                "id": ""
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