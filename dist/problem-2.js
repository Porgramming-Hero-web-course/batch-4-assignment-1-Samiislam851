"use strict";
function removeDuplicates(arr) {
    const uniqueNums = [];
    const hasAlready = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!hasAlready.has(arr[i])) {
            uniqueNums.push(arr[i]);
            hasAlready.add(arr[i]);
        }
    }
    return uniqueNums;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
