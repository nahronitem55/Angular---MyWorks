function greeter(person: string) {
  return "Hello, " + person;
}

let user = greeter("Orhan");

let sayi: number;
sayi = 55;
sayi = 33.6;

let day: string;
day = "Pazar";
day = "Salı";

let durum: boolean = false;
durum = true;
durum = false;

let sayilar: number[] = [1, 2, 3];
let sayilar2: Array<number> = [1, 2, 3];

let dizi: [number, String] = [55, "Samsun"];
console.log(dizi[0]);
enum Renks {
  Kirmizi,
  Siyah,
  Mavi,
}
let renk: Renks = Renks.Kirmizi;
console.log(renk);
