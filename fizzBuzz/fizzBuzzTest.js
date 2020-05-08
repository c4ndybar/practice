require('chai').should();
const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
    function verifyFizzBuzz(given, expected) {
        it(`returns ${expected} when given ${given}`, () => {
            fizzBuzz(given).should.equal(expected);
        })
    }

    verifyFizzBuzz(1, 1);
    verifyFizzBuzz(2, 2);
    verifyFizzBuzz(3, 'fizz');
    verifyFizzBuzz(4, 4);
    verifyFizzBuzz(5, 'buzz');
    verifyFizzBuzz(6, 'fizz');
    verifyFizzBuzz(7, 7);
    verifyFizzBuzz(8, 8);
    verifyFizzBuzz(9, 'fizz');
    verifyFizzBuzz(10, 'buzz');
    verifyFizzBuzz(11, 11);
    verifyFizzBuzz(12, 'fizz');
    verifyFizzBuzz(13, 13);
    verifyFizzBuzz(14, 14);
    verifyFizzBuzz(15, 'fizzbuzz');
})