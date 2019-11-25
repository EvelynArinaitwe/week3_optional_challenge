const findMissingNumbers = require('./missing');

test('It does not accept numbers as input', () => {
    expect(findMissingNumbers(5)).toBe('invalid input');
});

test('finds missing numbers in array one', () => {
    expect(findMissingNumbers([0,4,6,7])).toEqual([1,2,3,5]);
});

test('finds missing numbers in array two', () => {
    expect(findMissingNumbers([ 1, 2, 3, 5, 6, 7,9])).toEqual([4,8]);
});