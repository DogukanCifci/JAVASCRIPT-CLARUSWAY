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
  "dogukan",
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

//* ======================================================
//* ======================================================
//* ======================================================
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> prices dizisidir.

let toplam1 = 0;
prices.forEach((p, i, prices) => {
  toplam1 += p;
  console.log(`${i}. Toplam = ${toplam1}`);
  prices[i] = p + 10;
  //Bu sekilde prices listesi degistirilmis oldu
  //Bunu kalici olarak yapmak icin prices[i] yaptik. p = p + 10 yapsak degisiklik sadece burasi icin olurdu
});
console.log(prices);

//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 110 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> prices dizisidir.

const fiyatlar = [100, 260, 50, 90];
console.log("Eski fiyatlar => ", fiyatlar);
fiyatlar.map((p, i, array) => {
  if (p < 250) {
    array[i] = p * 1.5; //Kalici degisiklik olmasi icin array[i] kullandik. p = p *1,5 yazarsak degisiklik sadece burdaki p icin olacakti ve disarda gözükmeyecekti.
  } else {
    array[i] = p * 1.2;
  }
});

console.log("Yeni Fiyatlar =>", fiyatlar);
