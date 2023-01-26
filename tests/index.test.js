const { expect } = require("chai");
const {
	sum,
	product,
} = require("../3. JavaScript-Advanced/7. Unit Testing and Error Handling/1. Unit Testing and Error Handling - Lab/index");

describe("sum", () => {
	it("should return correct result with array of numbers", () => {
		//Arrange
		let array = [1, 2, 3];

		//Act
		let result = sum(array);

		//Assert
		expect(result).to.be.equal(6);
	});

	it("should return NaN if input is not an array", () => {
		//Arrange
		let invalidArray = "Invalid array";

		//Act
		let result = sum(invalidArray);

		//Assert
		expect(result).to.be.NaN;
	});

	it("should calculate correct result with array of mixed types", () => {
		//Arrange
		let mixedArray = ["1", true, 2];

		//Act
		let result = sum(mixedArray);

		//Assert
		expect(result).to.be.equal(4)
	});
});
