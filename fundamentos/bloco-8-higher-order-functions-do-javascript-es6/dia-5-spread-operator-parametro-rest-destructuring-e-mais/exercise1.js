// const rectangleArea = (width, height) => width * height;

// // console.log(rectangleArea(6, 9));

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// const calcArea = rectangles.forEach((rectangle) => {
//   // console.log(rectangle[0] * rectangle[1]);
//   rectangleArea(...rectangle);
// });

// console.log(calcArea);

const rectangleArea = (width, height) => {
  return width * height
};

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const calcArea = rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle);
  // console.log(rectangle[0] * rectangle[1]);
});

console.log(calcArea);