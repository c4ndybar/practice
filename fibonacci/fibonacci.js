function getFibonaci(number) {
    const sequence = [0,1]
    while(sequence.length < number) {
        const previous1 = sequence[sequence.length-2];
        const previous2 = sequence[sequence.length-1];

        sequence.push(previous1 + previous2);
    }

    return sequence[number-1];
}

module.exports = getFibonaci;