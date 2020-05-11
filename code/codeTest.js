require('chai').should();
const sut = require('./code');

describe('sut', () => {
    it('does something', () => {
        // let friends = sut(["Octavia:Zoltan", "Zoltan:Marko", "Marko:Diego", "Diego:Andres", "Andres:Marko"], ["Octavia", "Diego"]);
        let friends = sut(["Octavia:Fred", "Fred:James", "Fred:Carl", "Albert:Carl"], ["Octavia", "Carl"]);

        friends.should.eql({
            "Octavia": 4,
            "Carl": 4
        })
    })
});