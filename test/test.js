const should = require('should');
const request = require('request');
const expect = require('chai').expect;
const assert = require('assert');
//const describe = require('mocha').describe;

var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

// const baseUrl = 'http://localhost:3000/api/';
const baseUrl = 'http://localhost:3000/';
const util = require('util');
// const JSONPath = require('JSONPath');
const parser = require('json-parser');
var jp = require('jsonpath'); //https://www.npmjs.com/package/jsonpath



var spc1 = ' \n \n |:------( Test : ';
var spc2 = ' )------------------------------------------:| \n \n ';
var isBody;
var nullBody = ']';

/*
try {
                } catch (error) {
                    console.log('Error : ' + error);
                }
*/

// describe('Test Get All Data', function () {
//     it('Test Get All Data', function (done) {
//         request.get({ url: baseUrl + 'courses' },
//             function (error, response, body) {
//                 expect(response.statusCode).to.equal(200);
//                 console.log(body);
//                 done();
//             });
//     });
// });

/*
describe(spc1+'TestName'+spc2, function () {
    it('Test Name', function (done) {
        request.get({ url: baseUrl + 'functionNameWithURL' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);              
                done();
            });
    });
});
*/

/*
describe(spc1+"functionName"+spc2, function () {
    it("Test functionName", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('functionName')
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

// console.log(spaces);

// Calling testCases that insede the folders.
// test/admin
apiManagement = require("./admin/api-management");
collectionManagement = require("./admin/collection-management");
indexManagement = require("./admin/index-management");

// test/analytics
statManagementAdmin = require("./analytics/admin/stat-management");
statManagementRetailer = require("./analytics/retailer/stat-management");



describe(spc1 + 'Get All Categories' + spc2, function () {
    it('Test Get All Categories', function (done) {
        request.get({ url: baseUrl + 'getAllCategories' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);

                //   checkResponseBody(body);

                //      console.log('Is Body.? ' + isBody);

                if (JSON.parse(body).length != 0) {
                    //  List<Map<String, Object>> dataList = JsonPath.parse(body).read("$.[*]");
                    //     List < Map < String, Object >> dl; dl = JSONPath.parse(body).read("$.[*]._id");
                    // for (var i = 0; i < dl.length; i++) {
                    //     console.log(dl.get(i));
                    // }

                    var job = JSON.parse(body);
                    console.log(job);
                    var paths = jp.query(job, '$[0].subcategories[*].name');
                    // var paths = jp.query(job, '$[*].name'); 

                    for (var i = 0; i < paths.length; i++) {
                        console.log(paths[i]);
                    }

                    expect(paths[0]).to.equal('Women');
                    expect(paths[1]).to.equal('Men');

                } else {

                    assert.fail('Response body is null.');
                }
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
                /*
                var ss = body.to.String; var bb = [].parser.parse;JSON.parse(bb);var bodyEql = JSON.parse(bb).to.JSON;console.log('bbb'+bb);
                */

                //    checkResponseBody(body);
                //console.log('Is Body.? ' + isBody);

                if (JSON.parse(body).length != 0) {

                    var jjj = JSON.parse(body);
                    if (jjj.length == 0) {
                        console.log('Null Check is not working.....');
                    }
                    console.log('All Options...');
                } else {
                    assert.fail('Response body is null.');
                }
                done();
            });
    });
});

describe(spc1 + 'Get All Customer Types' + spc2, function () {
    it('Test Get All Customer Types', function (done) {
        request.get({ url: baseUrl + 'getAllCustomerTypes' },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                console.log(body);

                // checkResponseBody(body);

                var result = JSON.parse(body);

                if (result.length != 0) {
                    for (var i = 0; i < result.length; i++) {
                        console.log(i + ') ' + result[i]);
                    }
                } else {
                    MakeError("getAllCustomerTypes : Response body is null.");
                    // assert.fail('Response body is null.');
                }

                done();
            });
    });
});

/*
describe("Test Post addCategory", function () {
    it("Test Post addCategory", function (done) {
        // Send some Form Data
        chai.request(baseUrl)
            .post('addCategory')
            .send({
                "position": 12,
                "name": "testName",
                "parentId": "12"
            })
            .end(function (err, res) {

                if (err) {
                    console.log('Post Method error : ' + err);
                } else if (res != null) {
                    console.log('res is ok');
                    console.log(res.body);
                }
                // console.log('Response Value = ' + res.body.name);
                // expect(res.body.name).to.equal('TestingCourse');
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

});
*/








// -------------| Other Functions |---------------------------------------------------------------------------------


crazy();

function crazy() {

    console.log(spc1 + 'Crazy : Check Json Object' + spc2);
    var obj = { name: 'Crazy', ID: 22 };
    // var obj = {};
    // console.log(obj);
    
    checkResponseBody(obj);
    //chk(obj);
    console.log('Is Body.? ' + isBody);


}

function chk(oo){
    var df = JSON.parse(oo).length;
    console.log('ccccccccccccccccccc : '+ df);
}

// This function check the response body is a array or object(if it's not a array it take as a object) and null or not.
function checkResponseBody(body) {
    // isBody = !Object.keys(body).length;

    // var bodyArray = [];
    // bodyArray = JSON.parse(body);

    try {

        //       if (body && body.length>0)

        var isa = Array.isArray(JSON.parse(body));
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa : ' + JSON.parse(body).length);
    } catch (error) {

    }

    // var ss = body.toString;

    if (isa) {

        console.log('Body type : JsonArray');
        isBody = body[1];

        var aa = [];
        aa = body;
        console.log('Testing length :::::::::::: ' + aa.length);
    } else {

        console.log('Body type : JsonObject / *');

        if (!Object.keys(body).length) {
            console.log('This is a null object');
            isBody = ']';
        } else {
            console.log('Object is not null');
            isBody = 'Not null';
        }
    }
    // return !Object.keys(body).length;
}


// This function throw errors
function MakeError(oops) {
    throw new Error(oops);
}
