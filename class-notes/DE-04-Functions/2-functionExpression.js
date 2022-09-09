// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

// Önce fonksiyon olusturulur.

const tekCift = function (sayi) {
  return sayi % 2 == 0 ? "Sayi Cifttir" : "Sayi Tektir";

  //return ile yazdigimizda mantik artik bu fonksiyonun sonucu bu demektir. Eger alert console.log falan yazmazsak fonksiyon calisir ama sonucu göremeyiz.
};

console.log(tekCift(3));
console.log(tekCift(4));

//Fonksiyon declarationdan farkli olarak asagida cagrilir. Fonksiyon tanimlanmadan önce cagirilirsa hata verir.

//* Örnek2:En büyük sayiyi bul
//**********************************************************/

let maxBulma = function (a, b, c) {
  let enBuyuk;

  if (a > b) {
    enBuyuk = a;
  } else {
    enBuyuk = b;
  }

  if (c > enBuyuk) {
    enBuyuk = c;
  }
  return enBuyuk;
};

console.log(maxBulma(38, 17, 9));

//* Örnek3:Bir fonksiyon icinde baska fonksiyon cagrilabilir
//**********************************************************/

const hesapla = function (secim, s1, s2) {
  let sonuc; // sonuca her yerde ulasilamasin. Bu fonksiyon icin gecerli olsun diye tanimladim.
  if (secim == "kare") {
    sonuc = kareAl(s1, s2);
  } else if (secim == "alan") {
    sonuc = alan(s1, s2);
  } else if (secim == "cevre") {
    sonuc = cevre(s1, s2);
  } else {
    alert("Hatali giris yaptiniz!");
  }
  return sonuc;
};

const kareAl = function (s1, s2) {
  return s1 ** s2;
};

const alan = function (s1, s2) {
  return s1 * s2;
};

const cevre = function (s1, s2) {
  return (s1 + s2) * 2;
};

console.log(hesapla("kare", 2, 6));
