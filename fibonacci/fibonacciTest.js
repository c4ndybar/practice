require('chai').should();
const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
    function assertFibonacci(given, expected) {
        it(`returns ${expected} when given ${given}`, () => {
            fibonacci(given).should.equal(expected);
        })
    }

    assertFibonacci(1,0);
    assertFibonacci(2,1);
    assertFibonacci(3,1);
    assertFibonacci(4,2);
    assertFibonacci(5,3);
    assertFibonacci(6,5);
    assertFibonacci(7,8);
    assertFibonacci(8,13);
})