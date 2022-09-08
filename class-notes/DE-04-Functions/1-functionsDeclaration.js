// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması
function yazdir() {
  console.log("Nasilsiniz ? ");
}

yazdir();

//* Örnek2:
//****************************************************************/

function isimYazdir(ad1, ad2, ad3) {
  console.log(ad1);
  console.log(ad2);
  console.log(ad3);
}

isimYazdir("Dogukan", "Mevlüt", "Sinan");

//* Örnek3:
//****************************************************************/

function yasHesap(ad, dogumTarihi) {
  const yas = 2022 - dogumTarihi;
  console.log(`Benim adim ${ad} ve yasim ${2022 - dogumTarihi}`);
  return yas; //Tüm fonksiyonun tamaminin sonucudur
}

yasHesap("Muhammed", 571); //yani bunun esiti 1451 olur
//Eger böyle yaparsam ;

const doguInfo = yasHesap("Dogukan", 1996); //return yas dedigimiz icin bu fonksiyonun sonucu benim yasim olur
console.log(doguInfo);

const ipekInfo = yasHesap("Ipek", 1979);
const sinanInfo = yasHesap("Sinan", 1996);

//Yaslar Ortalamasi ;

const yasOrtalamasi = (doguInfo + ipekInfo + sinanInfo) / 3;

console.log(yasOrtalamasi);

//**********************************************************************************+ */
// function DECLARATION tanimlamadan önce yukarda da cagirabiliriz. Sikinti olmaz

//* Örnek4:
//****************************************************************/

console.log(sayiControl(12));

function sayiControl(number) {
  const sonuc =
    number % 2 == 0
      ? `${number} ==> Cift sayidir`
      : `${number} ==> Tek sayidir`;
  return sonuc;
}
