"use strict";
const getProperty = (obj, key) => {
    return obj[key];
};
const siam = { name: "Sami", age: 25 };
console.log(getProperty(siam, "age"));
