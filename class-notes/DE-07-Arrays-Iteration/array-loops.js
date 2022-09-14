//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

//Dizideki pozitif sayilarla negatif sayilari iki farkli arrayde toplayiniz.*
//1.Yöntem
const dizi1 = [2, 14, -5, 6, -123, 25, 38, -46];

const pozitif1 = [];
const negatif1 = [];

const arraysAyir = (dizi1) => {
  for (let i of dizi1) {
    if (i >= 0) {
      pozitif1.push(i);
    }
    if (i < 0) {
      negatif1.push(i);
    }
  }
};

arraysAyir(dizi1);
console.log(pozitif1); //Fonksiyon disinda da yazdirabilirim icinde de yazdirabilirim sikinti olmaz
console.log(negatif1);

const negatif2 = [];
const pozitif2 = [];

//2. Yöntem
const pozitif3 = [];
const negatif3 = [];

const arraysAyir2 = (dizi1) => {
  for (let i in dizi1) {
    if (dizi1[i] >= 0) {
      pozitif3.push(dizi1[i]);
    } else {
      negatif3.push(dizi1[i]);
    }
  }
};

arraysAyir2(dizi1);
console.log(pozitif3); //Fonksiyon disinda da yazdirabilirim icinde de yazdirabilirim sikinti olmaz
console.log(negatif3);

//3.Yöntem
const arraysAyir1 = (dizi) => {
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] < 0) {
      negatif2.push(dizi[i]);
    } else {
      pozitif2.push(dizi[i]);
    }
  }
};

arraysAyir1(dizi1);
console.log(negatif2);
console.log(pozitif2);

//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız. Eğer o
//* türden bir hayvan yok ise bulunamadığını yazdırsın.
//*--------------------------------------------------------

const hayvanlar = ["fil", "aslan", "deve", "fil", "kaplan", "fil", "deve"];

const hayvanAranan = prompt(
  "Bulmak istediginiz hayvanin ismini yaziniz!"
).toLowerCase();

let sayac = 0;
const hayvanArama = (hayvanIsim) => {
  for (let i of hayvanlar) {
    if (i == hayvanIsim) {
      sayac++;
    }
  }
};
hayvanArama(hayvanAranan);

if (sayac > 0) {
  console.log(
    ` Aradiginiz hayvan ismi : ${hayvanAranan} \n Hayvan Adet Sayisi : ${sayac}`
  );
} else {
  console.log("Aradiginiz hayvan maalesef yok");
}

//************* */

//Alttaki dizinin elemanlarini yan yana string olarak yazdiricam
const arabalar = ["bmw", "mercedes", "audi", "volvo"];

let arabalarString = "";
for (let araba of arabalar) {
  arabalarString += araba + " ";
}
console.log(arabalarString);

//ASIL YOL
console.log(arabalar.join(" "));

//! for loop=> Bir dizi üzerinde yineleme yapmanın orijinal yollarından biridir.
//? forEach=> Bir dizi üzerinde yineleme yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.
