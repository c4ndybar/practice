require('chai').should();
const palindrome = require('./palindrome');

describe('palindrome', () => {
    it('is true for a single letter', () => {
        palindrome('a').should.be.true;
    })

    it('is true for two of the same letter', () => {
        palindrome('aa').should.be.true;
    })

    it('is false for two different letters', () => {
        palindrome('ab').should.be.false;
    })

    it('is true for three letter palindrome', () => {
        palindrome('aba').should.be.true;
    })

    it('is false for three letter non-palindrome', () => {
        palindrome('abc').should.be.false;
    })

    it('is true for four letter palindrome', () => {
        palindrome('abba').should.be.true;
    })

    it('is false for four letter word that does not match in the middle', () => {
        palindrome('abca').should.be.false;
    })

    it('is false for four letter word that does not match on the ends', () => {
        palindrome('abbc').should.be.false;
    })

    it('is false for an empty word', () => {
        palindrome('').should.be.false;
    })

    it('is true for racecar', () => {
        palindrome('racecar').should.be.true;
    })
})