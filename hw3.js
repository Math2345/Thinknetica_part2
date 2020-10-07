function sortDesc(arr) {
    if (arr && typeof arr === "object" && arr.length > 0) {
        return  arr.sort( (num1, num2) => num2 - num1 );
    }
    else  {
        return false;
    }
}

const numbers = [-20, -10, 0, 10, 20, 30];

console.log(sortDesc(numbers));
console.log(sortDesc());
console.log(sortDesc([]));