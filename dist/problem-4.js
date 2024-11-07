"use strict";
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    }
    return shape.width * shape.height;
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 5, height: 4 });
console.log(rectangleArea);
