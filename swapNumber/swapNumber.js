/* swap numbers in place without a third variable */

module.exports = (first, second) => {
    second += first;
    first = second - first;
    second = second - first;
    
    return [first, second];
}