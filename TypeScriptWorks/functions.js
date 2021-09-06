function add(x, y) {
    return x + y;
}
function add2(x, y) {
    return x + y;
}
var add3 = function (x, y) {
    return x + y;
};
function add4(x, y) {
    if (y === void 0) { y = 5; }
    return x + y;
}
function add5(x, y) {
    if (x === void 0) { x = 7; }
    return x + y;
}
//opsiyonel veya default parametreler function sonunda yer almalıdır.
function add6(x, y) {
    if (y) {
        return x + y;
    }
    return x + y;
}
console.log(add(2, 3));
console.log(add("topla", 2));
console.log(add2(3, 4));
console.log(add3(4, 6));
console.log(add4(5));
console.log(add5(5, 6));
console.log(add6(5, 11));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join("");
}
function davetEt2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join("");
}
console.log(davetEt(" Ahmet", " Mehmet", " Orhan", " Hüseyin"));
console.log(davetEt2(" Orhan", " Kaan"));
