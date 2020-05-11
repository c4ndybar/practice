
function getRelsFor(rels, forPerson, visited) {
    let sum = 0;

    rels.forEach(([left, right]) => {
        [[left, right], [right, left]].forEach(([l, r]) => {
            if (l == forPerson) {
                if (!visited.includes(r)) {
                    visited.push(r);
                    sum += 1 + getRelsFor(rels, r, visited);
                }
            }
        })
    });

    return sum;
}

module.exports = (rels, relsFor) => {
    rels = rels.map((rel) => {
        let sep = rel.indexOf(':');
        let left = rel.slice(0, sep);
        let right = rel.slice(sep + 1);

        return [left, right]
    })

    let retObj = {};

    relsFor.forEach((forPerson) => {
        retObj[forPerson] = getRelsFor(rels, forPerson, [forPerson]);
    });

    return retObj;
}