// ===============SORU1
const ücgenAlan = (taban, yükseklik) => {
  return (taban * yükseklik) / 2;
};
let taban = +prompt("Ücgenin taban uzunlugunu giriniz : ");
let yükseklik = +prompt("Ücgenin yüksekligini giriniz : ");
console.log(`Ücgenin Alani : ${ücgenAlan(taban, yükseklik)}`);

//================ SORU2

const kareAl = (x) => x ** 2;
const küpAl = (x) => x ** 3;
const üsAl = (x, y) => x ** y;

let secim;
const islemSecim = (secim, sayi, sayi2) => {
  if (secim == "kare") {
    sonuc = kareAl(sayi);
  } else if (secim == "küp") {
    sonuc = küpAl(sayi);
  } else if (secim == "üs") {
    sonuc = üsAl(sayi, sayi2);
  }
  return sonuc;
};

console.log(islemSecim("kare", 3));
console.log(islemSecim("küp", 3));
console.log(islemSecim("üs", 4, 2));

//================ SORU3

let yil = new Date().getFullYear();

const artikYil = function (a) {
  if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
    console.log("Bulundugumuz yil artik yildir.");
  } else {
    console.log(`Bulundugumuz yil(${yil}) artik yil degildir`);
  }
};

artikYil(yil);
