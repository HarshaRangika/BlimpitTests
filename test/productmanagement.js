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


describe(spc1 + "Add Product" + spc2, function () {
    it("Test Add Product", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addProduct')
            .send({
                "secondaryCatIds": "",
                "s3Images": [],
                "cloudinaryImages": [],
                "localImageInfo": [],
                "stocks": []
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

describe(spc1 + "Show Product In Landing Pages" + spc2, function () {
    it("Test Show Product In Landing Pages", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('showProductInLandingPages')
            .send({
                "id": "",
                "products": [{
                    "productId": "",
                    "priority": ""
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

describe(spc1 + "Find Product Collections" + spc2, function () {
    it("Test Find Product Collections", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('findProductCollections')
            .send({
                "category": "",
                "retailerSequence": 0,
                "retailerCount": 0,
                "productCount": 0,
                "location": {}
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

describe(spc1 + "Find Products By Category And Retailer" + spc2, function () {
    it("Test Find Products By Category And Retailer", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('findProductsByCategoryAndRetailer')
            .send({
                "retailerId": "",
                "productSequence": 0,
                "productCount": 0,
                "category": ""
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

describe(spc1 + "Find Products Of A Given Retailer Group By Categories" + spc2, function () {
    it("Test Find Products Of A Given Retailer Group By Categories", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('findProductsOfAGivenRetailerGroupByCategories')
            .send({
                "retailerId": "",
                "productCount": 0
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

describe(spc1 + 'Find Products Having Name' + spc2, function () {
    it('Test Find Products Having Name', function (done) {
        request.get({ url: baseUrl + 'findProductsHavingName?searchString=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Find Products Of Given Retailer Having Name' + spc2, function () {
    it('Test Find Products Of Given Retailer Having Name', function (done) {
        request.get({ url: baseUrl + 'findProductsOfGivenRetailerHavingName?searchString=#&retailer=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + "Find Products Having Attributes" + spc2, function () {
    it("Test Find Products Having Attributes", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('findProductsHavingAttributes')
            .send({
                "category": "",
                "retailerId": "",
                "productSequence": 0,
                "productCount": 0,
                "attributes": [{
                    "key": "",
                    "value": ""
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

describe(spc1 + "Find Product" + spc2, function () {
    it("Test Find Product", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('findProduct')
            .send({
                "retailerId": "",
                "productId": ""
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

describe(spc1 + "Upload Product Bulk" + spc2, function () {
    it("Test Upload Product Bulk", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('uploadProductBulk')
            .send({
                "retailerId": ""
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
describe(spc1 + 'Get Product Template Files' + spc2, function () {
    it('Test Get Product Template Files', function (done) {
        request.get({ url: baseUrl + 'getProductTemplateFiles?{"products": ["", ""]}&retailerId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Test JSON CSV' + spc2, function () {
    it('Test Test JSON CSV', function (done) {
        request.get({ url: baseUrl + 'testJSONCSV?{"products": ["", ""]}&retailerId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});


/*
describe(spc1+"Notify Event"+spc2, function () {
    it("Test Notify Event", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('notifyEvent')
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