require('chai').should();
const swapNumber = require('./swapNumber');

describe('2 var number swap', () => {
    it('swaps the numbers', () => {
        swapNumber(2, 3).should.eql([3, 2]);
        swapNumber(-2, 3).should.eql([3, -2]);
        swapNumber(0, 10).should.eql([10, 0]);
    })
})