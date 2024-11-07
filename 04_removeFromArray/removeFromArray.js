const removeFromArray = function(array_original, ...items_to_remove) {
    return array_original.filter(item => !items_to_remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
