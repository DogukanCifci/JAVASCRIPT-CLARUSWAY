const num1 = +prompt("Bir sayi giriniz"); //10
const num2 = +prompt("Bir sayi giriniz"); //30
const num3 = +prompt("Bir sayi giriniz"); //20

const toplamSonuc = num1 + num2 + num3;
const carpimSonuc = num1 * num2 * num3;

console.log(`3 sayinin carpimlarinin sonucu = ${carpimSonuc}`);
console.log(`3 sayinin toplamlarinin sonucu = ${toplamSonuc}`);
console.log("----------");
console.log(`Sayilardan en kücügü = ${Math.min(num1, num2, num3)}`);
console.log(`Sayilardan en büyügü = ${Math.max(num1, num2, num3)}`);

console.log("----------");
console.log("IF-ELSE METODU ILE");
//IF-ELSE ILE CÖZÜMÜ
//MAX BULMA
let max;

if (num1 > num2) {
  max = num1;
} else {
  max = num2;
}

if (num3 > max) {
  max = num3;
}

console.log(`Max sayi = ${max}`);

//MIN BULMA
let min;

if (num1 > num2) {
  min = num2;
} else {
  min = num1;
}

if (num3 < min) {
  min = num3;
}
console.log(`Min Sayi = ${min}`);
