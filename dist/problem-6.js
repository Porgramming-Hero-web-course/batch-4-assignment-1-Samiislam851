"use strict";
const updateProfile = (profile, updates) => {
    return Object.assign(Object.assign({}, profile), updates);
};
const myProfile = { name: "Sami", age: 25, email: "siam@example.com" };
console.log(updateProfile(myProfile, { age: 35 }));
