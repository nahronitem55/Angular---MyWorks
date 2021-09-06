function deger(x: number): number {
  return x;
}

function deger2(x: string): string {
  return x;
}

let sayi = deger(10);
console.log(sayi);

let citys = deger2("İstanbul");
console.log(citys);

function deger3<T>(x: T): T {
  return x;
}

let sayi3 = deger3<number>(55);
let citys3 = deger3<string>("Samsun");

class GenericsClass<T> {
  constructor() {}

  degisken: T;
  parametreIn(parametre: T): T {
    return parametre;
  }
}

let sinif = new GenericsClass<string>();
sinif.parametreIn("Ankara");

console.log("TypeScript Work End! Test Commit")
