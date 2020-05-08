
module.exports = (word) => {
    for (let index = 0; index < word.length / 2; index++) {
        if (word[index] != word[word.length - index - 1])
            return false;
    }

    return (word.length > 0);
}
