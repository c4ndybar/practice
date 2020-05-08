require('chai').should();
const makeChange = require('./makeChange');

describe('makeChange', () => {
    it('returns no change for 0', () => {
        makeChange(0).should.eql({
            fives:0,
            dollars: 0,
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        })
    })

    it('returns one penny for 0.01', () => {
        makeChange(0.01).should.eql({
            fives:0,
            dollars: 0,
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 1
        })
    })

    it('returns one penny and one nickel for 0.01', () => {
        makeChange(0.06).should.eql({
            fives:0,
            dollars: 0,
            quarters: 0,
            dimes: 0,
            nickels: 1,
            pennies: 1
        })
    })

    it('returns one dime for 0.10', () => {
        makeChange(0.10).should.eql({
            fives:0,
            dollars: 0,
            quarters: 0,
            dimes: 1,
            nickels: 0,
            pennies: 0
        })
    })

    it('returns one dime for 0.18', () => {
        makeChange(0.18).should.eql({
            fives:0,
            dollars: 0,
            quarters: 0,
            dimes: 1,
            nickels: 1,
            pennies: 3
        })
    })

    it('returns one dime for 0.29', () => {
        makeChange(0.29).should.eql({
            fives: 0,
            dollars: 0,
            quarters: 1,
            dimes: 0,
            nickels: 0,
            pennies: 4
        })
    })

    it('returns one changef or 5.68', () => {
        makeChange(5.68).should.eql({
            fives: 1,
            dollars: 0,
            quarters: 2,
            dimes: 1,
            nickels: 1,
            pennies: 3
        })
    })
});