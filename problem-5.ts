type Person = {
    name: string;
    age: number;
}
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}
const siam: Person = { name: "Sami", age: 25 };
console.log(getProperty(siam, "age"));