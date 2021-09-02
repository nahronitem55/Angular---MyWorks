var dizi = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "ö",
  "p",
  "r",
  "s",
  "t",
  "s",
  "ş",
  "t",
  "u",
  "ü",
  "x",
  "v",
  "y",
  "z",
];

dizi.forEach(function(dizi){
    console.log("Alphabet")
    console.log(dizi)
})

console.log("Passwords")

for (i = 0; i <= 28; i++) {
  for (j = 0; j <= 28; j++) {
    for (k = 0; k <= 28; k++) {
      for (l = 0; l <= 28; l++) {
        console.log(dizi[i] + dizi[j] + dizi[k] + dizi[l]);
      }
    }
  }
}




console.log("Finish All Passwords");

var temp = 0;
while (temp < 10) {
  console.log(temp);
  temp++;
}

console.log("Finish Number While");

var temp2 = 0;
do {
  console(temp2);
  temp2++;
} while (temp2 < 3);
{
  console.log(temp2);
}
