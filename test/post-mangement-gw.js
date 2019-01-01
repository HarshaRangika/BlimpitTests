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


describe(spc1 + "Add Post" + spc2, function () {
    it("Test Add Post", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addPost')
            .send({
                "creatorId": "",
                "creatorType": "",
                "description": "",
                "products": [{
                    "retailerId": "",
                    "productId": "",
                    "imageId": "",
                    "likes": ["", ""]
                }],
                "comments": [{
                    "commentor": "",
                    "comment": ""
                }],
                "taggedUsers": ["", ""],
                "likes": ["", ""],
                "images": [{
                    "imageId": "",
                    "creatorId": "",
                    "likes": ["", ""]
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

describe(spc1 + "Add Comment To Post" + spc2, function () {
    it("Test Add Comment To Post", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addCommentToPost')
            .send({
                "ownerId": "",
                "postId": "",
                "commentor": "",
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

describe(spc1 + "Tag User To Post" + spc2, function () {
    it("Test Tag User To Post", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('tagUserToPost')
            .send({
                "ownerId": "",
                "postId": "",
                "taggedUser": "",
                "taggedBy": ""
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

describe(spc1 + "Add Like To Post" + spc2, function () {
    it("Test Add Like To Post", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addLikeToPost')
            .send({
                "ownerId": "",
                "postId": "",
                "likedBy": ""
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

describe(spc1 + "Add Like To Product Image" + spc2, function () {
    it("Test Add Like To Product Image", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addLikeToProductImage')
            .send({
                "ownerId": "",
                "postId": "",
                "likedBy": "",
                "retailerId": "",
                "productId": "",
                "imageId": ""
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

describe(spc1 + "Add Like To Image" + spc2, function () {
    it("Test Add Like To Image", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addLikeToImage')
            .send({
                "ownerId": "",
                "postId": "",
                "likedBy": "",
                "imageId": ""
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

describe(spc1 + 'Find Post' + spc2, function () {
    it('Test Find Post', function (done) {
        request.get({ url: baseUrl + 'findPost?ownerId=#&postId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Find Own Posts' + spc2, function () {
    it('Test Find Own Posts', function (done) {
        request.get({ url: baseUrl + 'findOwnPosts?userId=#&sequence=#&limit=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Find Tagged Posts' + spc2, function () {
    it('Test Find Tagged Posts', function (done) {
        request.get({ url: baseUrl + 'findTaggedPosts?userId=#&sequence=#&limit=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});