// сравниваются два массива: проверяются размеры и совпадения элементов. Если все условия будут выполнены, функция вернет true.

function compareArrays(array1, array2) {
    if (array1 && array2 && typeof array1 === 'object' && typeof array2 === "object") {
        return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
    }
}


console.log(compareArrays([1,2,3], [4,6,7])); // false
console.log(compareArrays([1,2,3], [1,2,3])); // true
console.log(compareArrays(['a','b','c'], ['a','b','c'])); // true
console.log(compareArrays([1,2,3,4], [1,2,3])); // false