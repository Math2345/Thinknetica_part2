
function sortRandomElem(arr) {
    if (arr && typeof arr === 'object' && arr.length > 0) {
        const compareRandom = (a, b) => Math.random() - 0.5;

        return arr.sort(compareRandom);
    }
    else  {
        return false;
    }
}


console.log(sortRandomElem([1, 2, 3, 4, 5]));
console.log(sortRandomElem([]));        // false
console.log(sortRandomElem());             //  false
