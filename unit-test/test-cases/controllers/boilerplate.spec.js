'use strict';

const chai = require('chai');    // for assert
let chaiHttp = require('chai-http');
const expect = chai.expect;      // type of assert
const sinon = require("sinon");  // function mocking
chai.use(chaiHttp);

// Load configurations
const config = require('../../../config/boilerplate');
const server = require('../../../app');

// Import mock data
// const { req } = require('../../mock-data/controllers/');

/* Sample test case */
describe('boilerplate sample test-case', () => {
    it("Sample test case for boilerplate file", async function () {
        this.timeout(config.unit_testing.timeOut);
        return expect("data").to.be.a('string');
    });

    // Run hook after each and every tets-case
    afterEach(function () {
        sinon.restore(); // Unwraps the spy
    });
});

/* Health api test case */
describe(config.unit_testing.api.health, () => {
    it("Health api test case", async function () {
        this.timeout(config.unit_testing.timeOut);
        try {
            let res = await chai.request(config.unit_testing.domain).get(config.unit_testing.api.health);
            expect(res).have.status(200);
            expect(res.body).to.be.a('object');
            return;
        } catch (error) {
            throw (new Error(error));
        }
    });

    // Run hook after each and every tets-case
    afterEach(function () {
        sinon.restore(); // Unwraps the spy
    });
});