function luhnCheck(idNumber) {
	let tempTotal = 0;
	let checkSum = 0;
	let multiplier = 1;
	for (let i = 0; i < 13; ++i) {
		tempTotal = parseInt(idNumber.charAt(i)) * multiplier;
		if (tempTotal > 9) {
			tempTotal =
				parseInt(tempTotal.toString().charAt(0)) +
				parseInt(tempTotal.toString().charAt(1));
		}
		checkSum = checkSum + tempTotal;
		multiplier = multiplier % 2 == 0 ? 1 : 2;
	}
	if (checkSum % 10 != 0) {
		return false;
	} else {
		return true;
	}
}

function isDateValid(day, month, year) {
	const totalDaysInMonth = new Date(year, month, 0).getDate();
	if (month > 12 || day > totalDaysInMonth || day > 31) {
		return false;
	} else {
		return true;
	}
}

function isIdNumberValid(idNumber) {
	const nonDigitCharacters = /[^0-9]/gi;
	const year = parseInt(idNumber.substring(0, 2));
	const month = parseInt(idNumber.substring(2, 4));
	const day = parseInt(idNumber.substring(4, 6));
	const citizenship = parseInt(idNumber.substring(10, 11));
	if (
		idNumber.length != 13 ||
		isDateValid(day, month, year) == false ||
		(citizenship != 0 && citizenship != 1) ||
		idNumber.match(nonDigitCharacters) !== null ||
		luhnCheck(idNumber) == false
	) {
		return false;
	} else {
		return true;
	}
}
module.exports = {
	isIdNumberValid,
};
