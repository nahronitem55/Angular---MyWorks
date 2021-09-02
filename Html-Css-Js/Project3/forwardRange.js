const range = [1, 2, 3, 4];

const squareRange = [];
range.forEach((number) => {
  squareRange.push(number * number);
});

console.log(squareRange);

//map

const mapRange = range.map((number) => number * 5);

console.log(mapRange);

//filter

const filterRange = range.filter((number) => number > 5);

console.log(filterRange);

//reduce

const total = range.reduce((x, number) => {
  return x + number;
}, 5);

console.log(total);
