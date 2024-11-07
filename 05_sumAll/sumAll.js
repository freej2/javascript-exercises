const sumAll = function(first_num, second_num) {
    // Check for arrays and non-numbers first
    if (Array.isArray(first_num) || Array.isArray(second_num) || 
        typeof first_num !== 'number' || typeof second_num !== 'number') {
        return 'ERROR';
    }
    
    // Then get min and max
    const min = Math.min(first_num, second_num);
    const max = Math.max(first_num, second_num);
    
    // Check for non-integers
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'ERROR';
    }
    if (min < 0) {
        return 'ERROR';
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
