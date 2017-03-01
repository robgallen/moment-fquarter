var chai = require("chai");
var moment = require("moment");
require("./moment-fquarter");

var expect = chai.expect;

// Start: Fiscal quarters
describe ("Fiscal quarters", function() {

	it ("Jan is Q4", function () {
		var m = moment("2013-01-01").fquarter();
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-01-01");
		expect(m.end).to.equal("2013-03-31");
		expect(m.toString()).to.equal("Q4 2012/13");
	});

	it("Feb is Q4", function () {
		var m = moment("2013-02-01").fquarter();
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-01-01");
		expect(m.end).to.equal("2013-03-31");
		expect(m.toString()).to.equal("Q4 2012/13");
	});

	it("Mar is Q4", function () {
		var m = moment("2013-03-01").fquarter();
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-01-01");
		expect(m.end).to.equal("2013-03-31");
		expect(m.toString()).to.equal("Q4 2012/13");
	});

	it("Apr is Q1", function () {
		var m = moment("2013-04-01").fquarter();
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-04-01");
		expect(m.end).to.equal("2013-06-30");
		expect(m.toString()).to.equal("Q1 2013/14");
	});

	it("May is Q1", function () {
		var m = moment("2013-05-01").fquarter();
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-04-01");
		expect(m.end).to.equal("2013-06-30");
		expect(m.toString()).to.equal("Q1 2013/14");
	});

	it("Jun is Q1", function () {
		var m = moment("2013-06-01").fquarter();
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-04-01");
		expect(m.end).to.equal("2013-06-30");
		expect(m.toString()).to.equal("Q1 2013/14");
	});

	it("Jul is Q2", function () {
		var m = moment("2013-07-01").fquarter();
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-07-01");
		expect(m.end).to.equal("2013-09-30");
		expect(m.toString()).to.equal("Q2 2013/14");
	});

	it("Aug is Q2", function () {
		var m = moment("2013-08-01").fquarter();
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-07-01");
		expect(m.end).to.equal("2013-09-30");
		expect(m.toString()).to.equal("Q2 2013/14");
	});

	it("Sep is Q2", function () {
		var m = moment("2013-09-01").fquarter();
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-07-01");
		expect(m.end).to.equal("2013-09-30");
		expect(m.toString()).to.equal("Q2 2013/14");
	});

	it("Oct is Q3", function () {
		var m = moment("2013-10-01").fquarter();
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-10-01");
		expect(m.end).to.equal("2013-12-31");
		expect(m.toString()).to.equal("Q3 2013/14");
	});

	it("Nov is Q3", function () {
		var m = moment("2013-11-01").fquarter();
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-10-01");
		expect(m.end).to.equal("2013-12-31");
		expect(m.toString()).to.equal("Q3 2013/14");
	});

	it("Dec is Q3", function () {
		var m = moment("2013-12-01").fquarter();
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-10-01");
		expect(m.end).to.equal("2013-12-31");
		expect(m.toString()).to.equal("Q3 2013/14");
	});
});
// End: Fiscal quarters

// Start: Calendar quarters
describe("Calendar quarters", function () {

	it("Jan is Q1", function () {
		var m = moment("2013-01-01").fquarter(1);
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-01-01");
		expect(m.end).to.equal("2013-03-31");
		expect(m.toString()).to.equal("Q1 2013");
	});

	it("Feb is Q1", function () {
		var m = moment("2013-02-01").fquarter(1);
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-01-01");
		expect(m.end).to.equal("2013-03-31");
		expect(m.toString()).to.equal("Q1 2013");
	});

	it("Mar is Q1", function () {
		var m = moment("2013-03-01").fquarter(1);
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-01-01");
		expect(m.end).to.equal("2013-03-31");
		expect(m.toString()).to.equal("Q1 2013");
	});

	it("Apr is Q2", function () {
		var m = moment("2013-04-01").fquarter(1);
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-04-01");
		expect(m.end).to.equal("2013-06-30");
		expect(m.toString()).to.equal("Q2 2013");
	});

	it("May is Q2", function () {
		var m = moment("2013-05-01").fquarter(1);
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-04-01");
		expect(m.end).to.equal("2013-06-30");
		expect(m.toString()).to.equal("Q2 2013");
	});

	it("Jun is Q2", function () {
		var m = moment("2013-06-01").fquarter(1);
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-04-01");
		expect(m.end).to.equal("2013-06-30");
		expect(m.toString()).to.equal("Q2 2013");
	});

	it("Jul is Q3", function () {
		var m = moment("2013-07-01").fquarter(1);
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-07-01");
		expect(m.end).to.equal("2013-09-30");
		expect(m.toString()).to.equal("Q3 2013");
	});

	it("Aug is Q3", function () {
		var m = moment("2013-08-01").fquarter(1);
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-07-01");
		expect(m.end).to.equal("2013-09-30");
		expect(m.toString()).to.equal("Q3 2013");
	});

	it("Sep is Q3", function () {
		var m = moment("2013-09-01").fquarter(1);
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-07-01");
		expect(m.end).to.equal("2013-09-30");
		expect(m.toString()).to.equal("Q3 2013");
	});

	it("Oct is Q4", function () {
		var m = moment("2013-10-01").fquarter(1);
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-10-01");
		expect(m.end).to.equal("2013-12-31");
		expect(m.toString()).to.equal("Q4 2013");
	});

	it("Nov is Q4", function () {
		var m = moment("2013-11-01").fquarter(1);
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-10-01");
		expect(m.end).to.equal("2013-12-31");
		expect(m.toString()).to.equal("Q4 2013");
	});

	it("Dec is Q4", function () {
		var m = moment("2013-12-01").fquarter(1);
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.be.null;
		expect(m.start).to.equal("2013-10-01");
		expect(m.end).to.equal("2013-12-31");
		expect(m.toString()).to.equal("Q4 2013");
	});
});
// End: Calendar quarters

// Start: Academic quarters
describe("Academic quarters", function () {

	it("Jan is Q2", function () {
		var m = moment("2013-01-01").fquarter(9);
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2012-12-01");
		expect(m.end).to.equal("2013-02-28");
		expect(m.toString()).to.equal("Q2 2012/13");
	});

	it("Feb is Q2", function () {
		var m = moment("2013-02-01").fquarter(9);
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2012-12-01");
		expect(m.end).to.equal("2013-02-28");
		expect(m.toString()).to.equal("Q2 2012/13");
	});

	it("Mar is Q3", function () {
		var m = moment("2013-03-01").fquarter(9);
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-03-01");
		expect(m.end).to.equal("2013-05-31");
		expect(m.toString()).to.equal("Q3 2012/13");
	});

	it("Apr is Q3", function () {
		var m = moment("2013-04-01").fquarter(9);
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-03-01");
		expect(m.end).to.equal("2013-05-31");
		expect(m.toString()).to.equal("Q3 2012/13");
	});

	it("May is Q3", function () {
		var m = moment("2013-05-01").fquarter(9);
		expect(m.quarter).to.equal(3);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-03-01");
		expect(m.end).to.equal("2013-05-31");
		expect(m.toString()).to.equal("Q3 2012/13");
	});

	it("Jun is Q4", function () {
		var m = moment("2013-06-01").fquarter(9);
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-06-01");
		expect(m.end).to.equal("2013-08-31");
		expect(m.toString()).to.equal("Q4 2012/13");
	});

	it("Jul is Q4", function () {
		var m = moment("2013-07-01").fquarter(9);
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-06-01");
		expect(m.end).to.equal("2013-08-31");
		expect(m.toString()).to.equal("Q4 2012/13");
	});

	it("Aug is Q4", function () {
		var m = moment("2013-08-01").fquarter(9);
		expect(m.quarter).to.equal(4);
		expect(m.year).to.equal(2012);
		expect(m.nextYear).to.equal(2013);
		expect(m.start).to.equal("2013-06-01");
		expect(m.end).to.equal("2013-08-31");
		expect(m.toString()).to.equal("Q4 2012/13");
	});

	it("Sep is Q1", function () {
		var m = moment("2013-09-01").fquarter(9);
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-09-01");
		expect(m.end).to.equal("2013-11-30");
		expect(m.toString()).to.equal("Q1 2013/14");
	});

	it("Oct is Q1", function () {
		var m = moment("2013-10-01").fquarter(9);
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-09-01");
		expect(m.end).to.equal("2013-11-30");
		expect(m.toString()).to.equal("Q1 2013/14");
	});

	it("Nov is Q1", function () {
		var m = moment("2013-11-01").fquarter(9);
		expect(m.quarter).to.equal(1);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-09-01");
		expect(m.end).to.equal("2013-11-30");
		expect(m.toString()).to.equal("Q1 2013/14");
	});

	it("Dec is Q2", function () {
		var m = moment("2013-12-01").fquarter(9);
		expect(m.quarter).to.equal(2);
		expect(m.year).to.equal(2013);
		expect(m.nextYear).to.equal(2014);
		expect(m.start).to.equal("2013-12-01");
		expect(m.end).to.equal("2014-02-28");
		expect(m.toString()).to.equal("Q2 2013/14");
	});
});
// End: Academic quarters
