var helloFunction1 = function hello() {
  console.log("Hello Men");
};

helloFunction1();

var helloFunction2 = () => {
  console.log("Hello Men2");
  console.log("Yes Sir!");
};

helloFunction2();

var helloFunction3 = (message) => {
  console.log(message);
};

helloFunction3("Hello Brothers");

var collection = (number1, number2) => {
  return number1 + number2;
};

let total = collection(55, 34);

console.log(total);
