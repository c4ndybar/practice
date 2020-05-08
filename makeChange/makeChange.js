const denominations = [
    {name: 'dollars', value: 100},
    {name: 'quarters', value: 25},
    {name: 'dimes', value: 10},
    {name: 'nickels', value: 5},
    {name: 'pennies', value: 1},
    {name: 'fives', value: 500},
].sort((a,b) => (b.value - a.value))

module.exports = (needChangeFor) => {
    needChangeFor = convertDollarsToPennies(needChangeFor);

    let changeTendered = {};

    denominations.forEach(({name, value}) => {
        changeTendered[name] = getCoinCountForDeonimination(needChangeFor, value);
        needChangeFor -=  changeTendered[name] * value;
    });

    return changeTendered;
}

function getCoinCountForDeonimination(needChangeFor, coinValue) {
    return Math.floor(needChangeFor / coinValue);
}

function convertDollarsToPennies(amount) {
    amount *= 100;
    return Math.round(amount); // because of JS floating point weirdness
}