const { isIdNumberValid } = require("../src/validate");

describe("Validate a South African ID -", () => {
	it("should check that the given ID number1 is valid", () => {
		expect(isIdNumberValid("2001014800086")).toBe(true);
	});
	it("should check that the given ID number2 is valid.", () => {
		expect(isIdNumberValid("8410250404087")).toBe(true);
	});
	it("should check that ID number is not shorter than 13 digits.", () => {
		expect(isIdNumberValid("970926")).toBe(false);
	});
	it("should check that ID number is not longer than 13 digits.", () => {
		expect(isIdNumberValid("970926634408124581657")).toBe(false);
	});
	it("should check that ID number only contains numbers.", () => {
		expect(isIdNumberValid("0311lol241081")).toBe(false);
	});
	it("should check that month is not greater than 12.", () => {
		expect(isIdNumberValid("9515300909083")).toBe(false);
	});
	it("should check that day is not greater than 31 or 29 if it's a leap year.", () => {
		expect(isIdNumberValid("9709366344081")).toBe(false);
	});
	it("should check that citizenship is either 0 or 1.", () => {
		expect(isIdNumberValid("0208166191489")).toBe(false);
	});
});
