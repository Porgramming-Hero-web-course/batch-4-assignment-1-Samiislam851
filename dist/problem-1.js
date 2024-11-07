"use strict";
const sumArray = (arr) => {
    return arr.reduce((acc, current) => {
        return acc + current;
    }, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));
