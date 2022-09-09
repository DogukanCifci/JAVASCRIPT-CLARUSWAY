// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//Örnek1 : 3ün kati mi degil mi kontrol

const katMi = (sayi) => (sayi % 3 == 0 ? "3ün katidir" : "3ün kati degil");

//const katMi = function kat (sayi) {
//  return sayi % 3 == 0 ? "3ün katidir" : "3ün kati degil" ; } ->Aksi takdirde bu sekilde yazmaliydim. return ile döndürmek zorundayim diger tüdeki fonksiyonlar icin

console.log(katMi(5));
console.log(katMi(6));

//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
  console.log("===========================");
  console.log("     JAVASCRİPT DERSİ      ");
  console.log("===========================");
};

menu();

// **************ÖRNEK3 YAS HESAPLA *********

const yasHesapla = (tarih) => new Date().getFullYear() - tarih;

//Uzun hali ile bu sekilde de yazabiliriz.
const yasHesaplaAlternatif = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

console.log(yasHesapla(1990));
console.log(yasHesaplaAlternatif(1990));

// new Date() ---> fonksiyonu ile istedigimiz tarihi cagirabiliriz. Istersek icinden sadece yil gün vb de alabiliriz.

//* Örnek4:silindirin hacmini hesaplayan fonksiyon
//********************************************************

//Silindirin hacim formülü -> PI*r*r*h

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log(hacimHesapla(2, 5));
console.log(hacimHesapla(2, 5).toFixed(2));

//toFixed() --> Virgüllü bir sayida virgülden sonra istedigimiz adette sayi almayai saglar.toFixed(a) a yerine ne kadar yazarsak

//* ORNEK5: Girilen n. terimdeki kadar Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo = (n) => {
  let fibSol = 1;
  let fibSag = 1;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fibSol + fibSag;
    console.log(toplam);
    fibSol = fibSag;
    fibSag = toplam;
  }
  return toplam;
};

console.log(
  "7.Rakam : ",
  fibo(7),
  "(*Ilk 2 sayi 1 1 onlari da katinca 7.rakam)"
);
