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

// module.exports = this;


describe(spc1 + "Add Category" + spc2, function () {
    it("Test Add Category", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addCategory')
            .send({
                "position": 1,
                "name": ""
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

describe(spc1 + "Delete Category" + spc2, function () {
    it("Test Delete Category", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('deleteCategory')
            .send({
                "id": "",
                "position": 1
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

describe(spc1 + "Add Retailer" + spc2, function () {
    it("Test Add Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addRetailer')
            .send({
                "id": "",
                "categories": []
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

describe(spc1 + "Delete Retailer" + spc2, function () {
    it("Test Delete Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('deleteRetailer')
            .send({
                "id": "",
                "categories": []
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

describe(spc1 + "Add Options" + spc2, function () {
    it("Test Add Options", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addOptions')
            .send({
                "id": "",
                "position": 0,
                "options": [{
                    "group": "",
                    "values": []
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

describe(spc1 + "Delete Options" + spc2, function () {
    it("Test Delete Options", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('deleteOptions')
            .send({
                "id": "",
                "position": 0,
                "options": [{
                    "group": "",
                    "values": []
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

describe(spc1 + "Add Attributes To Category" + spc2, function () {
    it("Test Add Attributes To Category", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addAttributesToCategory')
            .send({
                "catId": "",
                "position": 0,
                "attributes": [{
                    "key": "",
                    "values": []
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

describe(spc1 + "Upload Products To Category" + spc2, function () {
    it("Test Upload Products To Category", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('uploadProductsToCategory')
            .send({
                "catId": "",
                "position": 0,
                "name": "",
                "gid": {
                    "id": "",
                    "type": ""
                },
                "imageSource": ""
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

describe(spc1 + 'Get Products Of Category' + spc2, function () {
    it('Test GetProducts Of Category', function (done) {
        request.get({ url: baseUrl + 'getProductsOfCategory?id=#&position=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Attributes' + spc2, function () {
    it('Test Get Attributes', function (done) {
        request.get({ url: baseUrl + 'getAttributes?id=#&position=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Category Ids' + spc2, function () {
    it('Test Get Category Ids', function (done) {
        request.get({ url: baseUrl + 'getCategoryIds?position=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get All Sub Categories' + spc2, function () {
    it('Test Get All Sub Categories', function (done) {
        request.get({ url: baseUrl + 'getAllSubCategories?id=#&position=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Options' + spc2, function () {
    it('Test Get Options', function (done) {
        request.get({ url: baseUrl + 'getOptions?id=#&position=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get All Options' + spc2, function () {
    it('Test Get All Options', function (done) {
        request.get({ url: baseUrl + 'getAllOptions' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get All Categories' + spc2, function () {
    it('Test Get All Categories', function (done) {
        request.get({ url: baseUrl + 'getAllCategories' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});