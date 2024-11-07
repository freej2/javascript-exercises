const reverseString = function(stringToReverse) {
    const string_chars = stringToReverse.split('');
    const reversed = string_chars.reverse();
    reversed_string = reversed.join('');
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
