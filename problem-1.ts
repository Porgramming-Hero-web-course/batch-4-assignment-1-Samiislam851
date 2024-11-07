const sumArray = (arr: number[]):number => {
    return arr.reduce((acc: number, current: number) => {
        return acc + current;
      }, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));


