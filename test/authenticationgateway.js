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


describe(spc1 + "Login" + spc2, function () {
    it("Test Login", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('login')
            .send({
                "user": {
                    "userId": "",
                    "password": ""
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

describe(spc1 + "Token" + spc2, function () {
    it("Test Token", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('token')
            .send({
                "refreshToken": "",
                "user": {
                    "userId": ""
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

/*
describe(spc1+"Test"+spc2, function () {
    it("Test Test", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('test')
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
                }else{
                    assert.fail('Response is null.');
                }
                done();
            });
    });

});
*/

describe(spc1 + "Sign Up" + spc2, function () {
    it("Test Sign Up", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('signUp')
            .send({
                "userId": "",
                "password": "",
                "userIdType": "",
                "username": "",
                "userType": "",
                "firstName": "",
                "lastName": ""
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

describe(spc1 + "Verify" + spc2, function () {
    it("Test Verify", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('verify')
            .send({
                "id": "",
                "email": ""
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

describe(spc1 + "Send Password Resetting Info" + spc2, function () {
    it("Test Send Password Resetting Info", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('sendPasswordResettingInfo')
            .send({
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

describe(spc1 + "Update Password" + spc2, function () {
    it("Test Update Password", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('updatePassword')
            .send({
                "id": "",
                "code": 0,
                "password": ""
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

describe(spc1 + "Verify SMS Code" + spc2, function () {
    it("Test Verify SMS Code", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('verifySMSCode')
            .send({
                "phoneNumber": "",
                "verificationCode": 0
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

describe(spc1 + "Create Branch" + spc2, function () {
    it("Test Create Branch", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('createBranch')
            .send({
                "id": "",
                "enterpriseId": ""
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

describe(spc1 + "Complete Branch" + spc2, function () {
    it("Test Complete Branch", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('completeBranch')
            .send({
                "password": "",
                "username": "",
                "id": "",
                "queryId": 0,
                "lastName": ""
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

describe(spc1 + "Facebook Authentication Request" + spc2, function () {
    it("Test Facebook Authentication Request", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('auth/facebook/client')
            .send({
                "access_token": "",
                "expires_in": 0
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

describe(spc1 + "Google Authentication Request" + spc2, function () {
    it("Test Google Authentication Request", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('auth/google/client')
            .send({
                "access_token": "",
                "expires_in": 0
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

describe(spc1 + "Remove LDAP User" + spc2, function () {
    it("Test Remove LDAP User", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('removeLDAPUser')
            .send({
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