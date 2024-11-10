const palindromes = function (stringFWD) {
    // Remove all punctuation, spaces, and convert to lowercase
    stringFWD = stringFWD.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Convert to array, reverse it, and join back to string
    const stringBKWD = stringFWD.split('').reverse().join('');
    return stringBKWD === stringFWD;
};

// Do not edit below this line
module.exports = palindromes;
