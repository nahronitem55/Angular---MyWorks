class Car {
  model: number;
  person: number;
  name: string;
  constructor(model: number, person: number, name: string) {
    this.model = model;
    this.person = person;
    this.name = name;
  }

  run() {
    console.log("Car worked!");
  }
}

let car = new Car(2000, 5, "Passat");
console.log(
  car.model + " model " + car.name + " Aracımız " + car.person + " kisiliktir."
);

car.run();

class Kisi {
  protected kisiName: string;
  private _kisiTc: number;
  testCase: number;

  get kisiTc() {
    return this._kisiTc;
  }

  set kisiTc(kisiTc: number) {
    this._kisiTc = kisiTc;
  }

  kaydet() {
    console.log("Kişi kaydedildi");
  }
}

class Musteri extends Kisi {
  testCase = 1;
  satisYap() {
    console.log("Satış yapıldı.");
  }
}

class Personel extends Musteri {
  testCase = 2;
  kisiName = "Orhan";
  maasOde() {
    console.log("Maaş ödendi.");
  }
}

let musteri = new Musteri();
musteri.kisiTc = 36925814755;
console.log("Tc: " + musteri.kisiTc);
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();
