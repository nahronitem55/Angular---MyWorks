abstract class KrediBase {
  constructor(test: number) {}

  save(): void {
    console.log("Saved");
  }

  abstract calculate(): void;
}

class TuketiciKredi extends KrediBase {
  constructor() {
    super(1);
  }

  //(Inheritance) Bu Method tanımlanmalı
  calculate(): void {
    throw new Error("Tüketici kredisine göre hesap yapıldı.");
  }
}

class MortgageKredi extends KrediBase {
  constructor() {
    super(1);
  }

  //(Inheritance) Bu Method tanımlanmalı
  calculate(): void {
    throw new Error("Mortgage kredisine göre hesap yapıldı.");
  }
}

let tuketiciKredi = new TuketiciKredi();
tuketiciKredi.calculate();
tuketiciKredi.save();

/*

let mortgageKredi = new MortgageKredi();
mortgageKredi.calculate();
mortgageKredi.save();
 
let kredi: KrediBase;
kredi = new TuketiciKredi();
kredi = new MortgageKredi();

*/
