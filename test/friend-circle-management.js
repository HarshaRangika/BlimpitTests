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


describe(spc1 + "Send Friend Request" + spc2, function () {
    it("Test Send Friend Request", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('sendFriendRequest')
            .send({
                "sender": "",
                "receiver": ""
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

describe(spc1 + "Accept Friend Request" + spc2, function () {
    it("Test Accept Friend Request", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('acceptFriendRequest')
            .send({
                "sender": "",
                "receiver": ""
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

describe(spc1 + "Block Friend" + spc2, function () {
    it("Test Block Friend", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('blockFriend')
            .send({
                "sender": "",
                "receiver": ""
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

describe(spc1 + "Un Friend" + spc2, function () {
    it("Test Un Friend", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('unFriend')
            .send({
                "sender": "",
                "receiver": ""
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

describe(spc1 + 'Get Friends' + spc2, function () {
    it('Test Get Friends', function (done) {
        request.get({ url: baseUrl + 'getFriends?userId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Pending Friends' + spc2, function () {
    it('Test Get Pending Friends', function (done) {
        request.get({ url: baseUrl + 'getPendingFriends?userId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});