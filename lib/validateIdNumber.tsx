export function luhnCheck(idNumber) {
    let checkSum = 0;
    for (let i = 0; i < 13; i++) {
        let digit = parseInt(idNumber[i], 10);
        let temp = i % 2 === 0 ? digit : digit * 2;
        if (temp > 9) temp = Math.floor(temp / 10) + (temp % 10);
        checkSum += temp;
    }
    return checkSum % 10 === 0;
}

export function isDateValid(day, month, year) {
    if (month < 1 || month > 12 || day < 1 || day > 31) return false;
    const daysInMonth = new Date(year, month, 0).getDate();
    return day <= daysInMonth;
}

export function isIdNumberValid(idNumber) {
    if (typeof idNumber !== 'string' || idNumber.length !== 13) return false;
    if (/[^0-9]/.test(idNumber)) return false;

    const year = parseInt(idNumber.slice(0, 2), 10);
    const month = parseInt(idNumber.slice(2, 4), 10);
    const day = parseInt(idNumber.slice(4, 6), 10);
    const citizenship = parseInt(idNumber[10], 10);
    const fullYear = year >= 0 && year <= 25 ? 2000 + year : 1900 + year;

    return (
        isDateValid(day, month, fullYear) &&
        [0, 1].includes(citizenship) &&
        luhnCheck(idNumber)
    );
}

export function getRandomInvalidMessage() {
    const messages = [
        "That ID is faker than my last diet.",
        "This ID tried logging in and even the system laughed.",
        "Not even AI can make sense of that ID.",
        "That ID belongs in the reject bin.",
        "Are you pranking me? That ID is made-up.",
        "That's not an ID — it's a cry for help.",
        "This ID just filed for unemployment.",
        "Nice try... But nope.",
        "Even my grandma wouldn’t fall for that.",
        "This ID couldn’t fool a potato.",
        "Seriously? That ID is a disgrace. Go fix yourself.",
        "I've seen better IDs written on napkins. Try again.",
        "What is this?! An ID number or your phone password?",
        "Do you even know what an ID is? Because this ain’t it.",
        "This ID is so wrong, even the Home Affairs system cried.",
        "Bro... this ID couldn’t convince a potato it’s real.",
        "I'm not mad. I'm just extremely disappointed in this ID.",
        "This ID belongs in a museum… labeled 'FAILURES'.",
        "Are you typing blindfolded? Because this is nonsense.",
        "Delete this ID. Burn it. Bury it. Never bring it here again.",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}
