function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var citys = deger2("İstanbul");
console.log(citys);
function deger3(x) {
    return x;
}
var sayi3 = deger3(55);
var citys3 = deger3("Samsun");
var GenericsClass = /** @class */ (function () {
    function GenericsClass() {
    }
    GenericsClass.prototype.parametreIn = function (parametre) {
        return parametre;
    };
    return GenericsClass;
}());
var sinif = new GenericsClass();
sinif.parametreIn("Ankara");
console.log("TypeScript Work End! Test Commit");
