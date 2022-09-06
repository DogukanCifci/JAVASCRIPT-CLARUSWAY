// ---------- ARITMETIK OPERATÖRLER-------------

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);

// BACKTICK KULLANIMI PYTHONDAKI f-String metoduna benziyor
//${} koyar koymaz iki tirnak icinde yazsamda otomatik olarak backticke dönüyor

var isim = "Dogukan";
var dogumTarihi = 1996;
console.log(`${isim} ${2022 - dogumTarihi} yasindadir.`);

//Eger böyle yazmazsak diger türlü uzun uzun yazmamiz gerekiyor

console.log(isim + " " + (2022 - dogumTarihi) + " " + "yasindadir");

// ----********* ARTIRMA-AZALTMA *****-----

let a = 5;
b = a++; //b burda 5 olur cünkü a++ bir sonraki satirda 6 olur(Islemin oldugu yerde gözükmz. Islem bittikten hemen sonra anin degeri artmis olur)

console.log(a); //6   !!!!!!
console.log(b); //5   !!!!!!

//b = a + 3; // Burda a nin degeri degismez
// ama b = a++ anin degerini degistirir.

//Bi sonraki satirda kendini gösterir

// !!!!!! EGER ++ VEYA -- ÖNCE YAZARSAM OLDUGU YERDE DEGISTIR ANLAMINA GELIR

let c = 10;

console.log("c nin degeri : ", ++c, c);

let d = ++c; //Burda direk alir. Ama eger sagina koysaydik alttaki dnin degeri 11 olurdu
console.log(d);
