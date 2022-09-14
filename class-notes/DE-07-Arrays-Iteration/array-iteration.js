//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

//*======================================================

//*=======================ORNEK

const prices = [100, 250, 50, 90, 400];

prices.forEach((fiyat) => console.log(fiyat));
//Icerdeki parantezin icine yazdigim degisken listenin elemanlarini temsil eder. => dan sonra yaptirmak istedigim seyi yazdiririm
console.log("**************");
let toplam = 0;
let degisikliklerGitti = prices.forEach((i) => {
  toplam += i;
});
console.log(toplam);
console.log(degisikliklerGitti); //undefined. Bunun sonucu undefined cikar.Cünkü forEach ile yaptirdigim genel olay önemsiz. Iteration bittikten sonra olay kapanir.Am icerde toplam olarak degistirdigim olay kalicidir.

//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp ve bunu döndürebilir, tüketmez foreach gibi.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = [
  "doguk",
  "hilal",
  "faruk",
  "sinan",
  "muhammed",
  "güler",
  "mevlüt",
];

let degisikliklerKaldi2 = names.map((p) => p.toUpperCase());
console.log(degisikliklerKaldi2);
console.log(names); //oRIJINAL HALI SABIT KALDI
//forEach ile map farki mapde genel atadigim sonuc kalici olur. forEachdeki gibi undefined cikmaz. Orijinal fonksiyon degismez ama sonradan atadigim degiskende o degisiklikler kaydedilir.

const yeniIsim = names
  .map((a) => a.toUpperCase())
  .forEach((b) => console.log(b));
