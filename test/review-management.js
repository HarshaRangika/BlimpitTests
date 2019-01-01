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


describe(spc1 + "Add Review" + spc2, function () {
    it("Test Add Review", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addReview')
            .send({
                "retailerId": "",
                "reviewerId": "",
                "reviewerName": "",
                "review": "",
                "rate": 0,
                "comments": [{
                    "commentorId": "",
                    "commentorName": "",
                    "comment": ""
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

describe(spc1 + "Add Comment" + spc2, function () {
    it("Test Add Comment", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addComment')
            .send({
                "retailerId": "",
                "reviewId": "",
                "commentatorId": "",
                "commentatorName": "",
                "comment": ""
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

describe(spc1 + 'Get Reviews' + spc2, function () {
    it('Test Get Reviews', function (done) {
        request.get({ url: baseUrl + 'getReviews?retailerId=#&skipCount=#&limit=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});