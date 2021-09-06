var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model, person, name) {
        this.model = model;
        this.person = person;
        this.name = name;
    }
    Car.prototype.run = function () {
        console.log("Car worked!");
    };
    return Car;
}());
var car = new Car(2000, 5, "Passat");
console.log(car.model + " model " + car.name + " Aracımız " + car.person + " kisiliktir.");
car.run();
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "kisiTc", {
        get: function () {
            return this._kisiTc;
        },
        set: function (kisiTc) {
            this._kisiTc = kisiTc;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kişi kaydedildi");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCase = 1;
        return _this;
    }
    Musteri.prototype.satisYap = function () {
        console.log("Satış yapıldı.");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCase = 2;
        _this.kisiName = "Orhan";
        return _this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş ödendi.");
    };
    return Personel;
}(Musteri));
var musteri = new Musteri();
musteri.kisiTc = 36925814755;
console.log("Tc: " + musteri.kisiTc);
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
