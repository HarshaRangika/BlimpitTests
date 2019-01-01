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


describe(spc1+'Find Open Complaints'+spc2, function () {
    it('Test Find Open Complaints', function (done) {
        request.get({ url: baseUrl + 'findOpenComplaints?skip=#&limit=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);              
                done();
            });
    });
});

describe(spc1+'Find Withdrawn Complaints'+spc2, function () {
    it('Test Find Withdrawn Complaints', function (done) {
        request.get({ url: baseUrl + 'findWithdrawnComplaints?skip=#&limit=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);              
                done();
            });
    });
});

describe(spc1+'Find Resolved Complaints'+spc2, function () {
    it('Test Find Resolved Complaints', function (done) {
        request.get({ url: baseUrl + 'findResolvedComplaints?skip=#&limit=#' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);              
                done();
            });
    });
});

describe(spc1+"Resolve Complaint"+spc2, function () {
    it("Test Resolve Complaint", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('resolveComplaint')
            .send({
                "complaintId": ""
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