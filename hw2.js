function isCheckType(data, type) {
    return data && typeof data === type;
}


function filterByLength(arr, minLen, maxLen) {
    const isArr = isCheckType(arr, 'object') && arr.length > 0;
    const isNum = !( isNaN(minLen) || isNaN(maxLen) );

    if (isArr && isNum) {
          return arr.filter( (elem) => elem.length >= minLen && elem.length <= maxLen);
    } else  {
          return false;
    }
}

const fruits = ['orange', 'apple', 'banana', ''];

console.log(filterByLength(fruits, 0,7));
console.log(filterByLength(fruits, 0,5));
console.log(filterByLength());
console.log(filterByLength(666, 7, 8));
console.log(filterByLength(fruits, '0', '5'));