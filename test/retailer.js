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


describe(spc1 + "Add Retailer Profile" + spc2, function () {
    it("Test Add Retailer Profile", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addRetailerProfile')
            .send({
                "id": "",
                "profileId": "",
                "location": {
                    "lat": 0,
                    "lng": 0
                },
                "postalCode": 0,
                "countryCode": ""
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

describe(spc1 + "Add Enterprise Profile" + spc2, function () {
    it("Test Add Enterprise Profile", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addEnterpriseProfile')
            .send({
                "id": "",
                "advanceinfo": {
                    "businessRegistrationNumber": ""
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

describe(spc1 + "Add Enterprise Branch Profile" + spc2, function () {
    it("Test Add Enterprise Branch Profile", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addEnterpriseBranchProfile')
            .send({
                "id": "",
                "enterpriseId": "",
                "location": {
                    "lat": 0,
                    "lng": 0
                },
                "postalCode": 0,
                "countryCode": ""
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

describe(spc1 + "Update Retailer Profile" + spc2, function () {
    it("Test Update Retailer Profile", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('updateRetailerProfile')
            .send({
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

describe(spc1 + "Upload Profile Or Logo Image" + spc2, function () {
    it("Test Upload Profile Or Logo Image", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('uploadProfileOrLogoImage')
            .send({
                "logo": "any",
                "profileImage": "any",
                "coverPhoto": "any"
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

describe(spc1 + "Update Retailer Status" + spc2, function () {
    it("Test Update Retailer Status", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('updateRetailerStatus')
            .send({
                "status": "",
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

describe(spc1 + 'Get Retailer Profile' + spc2, function () {
    it('Test get Retailer Profile', function (done) {
        request.get({ url: baseUrl + 'getRetailerProfile?id=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Retailer Ids By Status' + spc2, function () {
    it('Test Get Retailer Ids By Status', function (done) {
        request.get({ url: baseUrl + 'getRetailerIdsByStatus?status=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Branch Ids By Enterprise Id' + spc2, function () {
    it('Test Get Branch Ids By Enterprise Id', function (done) {
        request.get({ url: baseUrl + 'getBranchIdsByEnterpriseId?enterpriseId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get Enterprise Id By Branch Id' + spc2, function () {
    it('Test Get Enterprise Id By Branch Id', function (done) {
        request.get({ url: baseUrl + 'getEnterpriseIdByBranchId?branchId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + "Upload Template Image" + spc2, function () {
    it("Test Upload Template Image", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('uploadTemplateImage')
            .send({
                "file": "any??",
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

describe(spc1 + "Delete Template Image" + spc2, function () {
    it("Test Delete Template Image", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('deleteTemplateImage')
            .send({
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

describe(spc1 + "Subscribe To Plan" + spc2, function () {
    it("Test SubscribeTo Plan", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('subscribeToPlan')
            .send({
                "retailerId": "",
                "subscriptionPlanId": ""
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

describe(spc1 + "Add Subscription Plan" + spc2, function () {
    it("Test Add Subscription Plan", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addSubscriptionPlan')
            .send({
                "name": "",
                "features": ["", ""],
                "limits": [{
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

describe(spc1 + 'Get Subscription Limit Keys' + spc2, function () {
    it('Test Get Subscription Limit Keys', function (done) {
        request.get({ url: baseUrl + 'getSubscriptionLimitKeys' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Get All Template Images' + spc2, function () {
    it('Test Get All Template Images', function (done) {
        request.get({ url: baseUrl + 'getAllTemplateImages?retailerId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + "Add Store Template" + spc2, function () {
    it("Test Add Store Template", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addStoreTemplate')
            .send({
                "retailerId": "",
                "template": "any???"
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

describe(spc1 + 'Get Store Templates' + spc2, function () {
    it('Test Get Store Templates', function (done) {
        request.get({ url: baseUrl + 'getStoreTemplates?retailerId=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Find Nearby Retailers' + spc2, function () {
    it('Test Find Nearby Retailers', function (done) {
        request.get({ url: baseUrl + 'findNearbyRetailers?distance=#&latitude=#&longitude=#&skip=#&limit=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});

describe(spc1 + 'Find Nearby Retailers Count' + spc2, function () {
    it('Test Find Nearby Retailers Count', function (done) {
        request.get({ url: baseUrl + 'findNearbyRetailersCount?distance=#&latitude=#&longitude=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});