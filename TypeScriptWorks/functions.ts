function add(x, y) {
  return x + y;
}

function add2(x: number, y: number): number {
  return x + y;
}

let add3 = function (x: number, y: number): number {
  return x + y;
};

function add4(x: number, y: number = 5): number {
  return x + y;
}

function add5(x: number = 7, y: number): number {
  return x + y;
}

//opsiyonel veya default parametreler function sonunda yer almalıdır.
function add6(x: number, y?: number): number {
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

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
  return ilkDavetli + " " + digerleri.join("");
}

function davetEt2(...digerleri: string[]): string {
  return digerleri.join("");
}

console.log(davetEt(" Ahmet", " Mehmet", " Orhan", " Hüseyin"));
console.log(davetEt2(" Orhan", " Kaan"));
