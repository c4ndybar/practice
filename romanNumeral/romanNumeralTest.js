
require('chai').should();
const toRomanNumeral = require('./romanNumeral');

describe('toRomanNumeral', () => {

    [
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX'],
        [10, 'X'],
        [13, 'XIII'],
        [14, 'XIV'],
        [18, 'XVIII'],
        [19, 'XIX'],
        [20, 'XX'],
        [40, 'XL'],
        [50, 'L'],
        [5627, 'MMMMMDCXXVII'],
    ].forEach(([given, expected]) => {
            it(`gives roman numeral ${expected} when given ${given}`, () => {
                toRomanNumeral(given).should.eql(expected);
            });
        })
});