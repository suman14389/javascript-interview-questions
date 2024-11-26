// Find the sum of digits of a number until the sum becomes a single digit.

function getDigitsSum(number, sum = 0) {
    const array = number.toString().split('');
    const sum1 = array.reduce((prev, curr) => {
        return prev + parseInt(curr);
    }, sum)

    if(sum1 < 10) {
        return sum1;
    }

    return getDigitsSum(sum1);
}

console.log(getDigitsSum(238745475));