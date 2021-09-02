([] ===
  [][(1, 2)]) === //false
  [1, 2]; //false

var obj1 = { value: 1 };
var obj2 = { value: 1 };

obj1 === obj2; //false

console.log(this);

this === window; //true

alert("who are you?");
this.alert("Did you me?");
window.alert("What are you doing?");

const prodService = {
  add: function () {
    console.log(this);
  },
};

prodService.add(); // Function return result
