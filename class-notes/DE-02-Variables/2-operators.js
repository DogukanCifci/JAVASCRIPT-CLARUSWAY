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

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//Bir sayinin birler onlar ve yüzler basamagini bulma

const number = 571;

const birler = number % 10; //1
const onlar = Math.floor((number / 10) % 10); //7

console.log(birler, onlar);
console.log("merhaba");

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1 = 4;

console.log(sayi1 == 4); //true
console.log(sayi1 == "4"); //true ---->>  == isareti sekle bakiyor.Onun icin ture ciktisi verdi !!!!!
console.log(sayi1 === "4"); //false --->> === isareti verinin tipine de bakar. Bu sebeple false verdi

// * =======================================================
// *                TİP DÖNÜŞÜMLERİ
// * =======================================================

const para = Number("1000") + Number("900"); //1900 dür 1000900 olarak vemez cevabi. Number yazmasaydik öyle verirdi.

console.log(para);

// number yerine alternatif parseInt te kullanılabilir
// console.log(parseInt(para));
console.log(Number("")); //0
console.log(Number(null)); //0

//* -------- NULLISH COALESCING OPERATOR----------- */

//?  Bir ifadenin null veya undefined olması durumuna göre seçim yapmamıza olanak sağlayan bir operatördür.eğer kullanıcı input a null girer yada hiçbişey (undefined) girmezse, belirteceğim ifadeyi (noname) kabul et
const isim1 = null; // ?null
const defaultIsim = "noname";
const islem1 = isim1 ?? defaultIsim;
// isim1 true ise onu döndür yoksa 2. ifadeyi
console.log(islem1); //noname

//Eger isim1 yani ilk eleman false ise ikinciyi yaz. Eger ilki(isim1) true ise ilkini yazdir.
//Örnegin kisi ismini girmedi, null yerine bizim verdigimiz default deger alinsin mantigiyla
