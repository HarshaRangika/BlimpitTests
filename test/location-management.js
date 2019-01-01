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


describe(spc1 + "Add Postal Code" + spc2, function () {
    it("Test Add Postal Code", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addPostalCode')
            .send({
                "countryCode": "",
                "state": "",
                "city": "",
                "postalCode": ""
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

describe(spc1 + 'Get Postal Codes' + spc2, function () {
    it('Test Get Postal Codes', function (done) {
        request.get({ url: baseUrl + 'getPostalCodes?{ "countryCode":"", "state":"", "city":"" }' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});