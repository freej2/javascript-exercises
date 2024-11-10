const fibonacci = function(FibIndex) {
    if (FibIndex < 0){
        return 'OOPS';
    }
    const FibNums = [0, 1];

    for (let i = 2; i <= FibIndex; i++){
        FibNums[i] = FibNums[i-2] + FibNums[i-1];
    }
    return FibNums[index];
};

// Do not edit below this line
module.exports = fibonacci;
