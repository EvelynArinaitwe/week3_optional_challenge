
function findMissingNumbers(array) {

    if(typeof array==='number'){
        return 'invalid input';
    }
    else{

    const arraySize = array.length;
    const arr = [];
    let i = 0;
    let j = array[0];
    let jSize = array[arraySize - 1];
    while (j < jSize) {
        (array[i] === j) ? (i += 1) : (arr.push(j));
        j++;
    }
    console.log(arr);
    return arr;
}
}

//findMissingNumbers([2,4,6,7]);

module.exports = findMissingNumbers;