function greeter(person) {
    return "Hello, " + person;
}
var user = greeter("Orhan");
var sayi;
sayi = 55;
sayi = 33.6;
var day;
day = "Pazar";
day = "Salı";
var durum = false;
durum = true;
durum = false;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3];
var dizi = [55, "Samsun"];
console.log(dizi[0]);
var Renks;
(function (Renks) {
    Renks[Renks["Kirmizi"] = 0] = "Kirmizi";
    Renks[Renks["Siyah"] = 1] = "Siyah";
    Renks[Renks["Mavi"] = 2] = "Mavi";
})(Renks || (Renks = {}));
var renk = Renks.Kirmizi;
console.log(renk);
