let { assert } = require("chai");
let {
	addFive,
	subtractTen,
	sum,
} = require("../3. JavaScript-Advanced/7. Unit Testing and Error Handling/2. Unit Testing and Error Handling - Exercise/04.mathEnforcer");

describe("mathEnforcer", function () {
	describe("addFive", function () {
		it("should return undefined for string parameter", function () {
			let actual = mathEnforcer.addFive("test");
			expect(actual).to.be.undefined;
		});

		it("should return 5 for 0", function () {
			let actual = mathEnforcer.addFive(0);
			let expected = 5;
			expect(actual).to.be.equal(expected);
		});

		it("should return 0 for -5", function () {
			let actual = mathEnforcer.addFive(-5);
			let expected = 0;
			expect(actual).to.be.equal(expected);
		});

		it("should return 7.5 for 2.5", function () {
			let actual = mathEnforcer.addFive(2.5);
			let expected = 7.5;
			expect(actual).to.be.closeTo(expected, 0.01);
		});
	});

	describe("subtractTen", function () {
		it("should return undefined for string parameter", function () {
			let actual = mathEnforcer.subtractTen("test");
			expect(actual).to.be.undefined;
		});

		it("should return 0 for 10", function () {
			let actual = mathEnforcer.subtractTen(10);
			let expected = 0;
			expect(actual).to.be.equal(expected);
		});

		it("should return -20 for -10", function () {
			let actual = mathEnforcer.subtractTen(-10);
			let expected = -20;
			expect(actual).to.be.equal(expected);
		});

		it("should return 2.5 for 12.5", function () {
			let actual = mathEnforcer.subtractTen(12.5);
			let expected = 2.5;
			expect(actual).to.be.closeTo(expected, 0.01);
		});
	});

	describe("sum", function () {
		it("should return undefined for string as first parameter", function () {
			let actual = mathEnforcer.sum("test", 5);
			expect(actual).to.be.undefined;
		});

		it("should return undefined for string as second parameter", function () {
			let actual = mathEnforcer.sum(5, "test");
			expect(actual).to.be.undefined;
		});

		it("should return 10 for 5,5", function () {
			let actual = mathEnforcer.sum(5, 5);
			let expected = 10;
			expect(actual).to.be.equal(expected);
		});

		it("should return 0 for 5,-5", function () {
			let actual = mathEnforcer.sum(5, -5);
			let expected = 0;
			expect(actual).to.be.equal(expected);
		});

		it("should return 10.7 for 5.5,5.2", function () {
			let actual = mathEnforcer.sum(5.5, 5.2);
			let expected = 10.7;
			expect(actual).to.be.closeTo(expected, 0.01);
		});
	});
});
