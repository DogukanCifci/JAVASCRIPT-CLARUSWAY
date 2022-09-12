// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//! Klasik yöntem ile tanimlanan String primitive dir
const str1 = "clarusway";
const str2 = "Hello";
const str3 = " all the world!";

console.log(str2 + str3, typeof (str2 + str3));

//! 2- String constructor ile tanimlanan STRING non-primitive dir.(Ilkel olmayan)

const str4 = new String("Yeni bir String");

console.log(str4, typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! objectlerine dönüştürür. Bu sayede, String nesnelerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================
let s1 = "Hello";
let s2 = "world";

console.log(s1.concat(s2)); //Orijnal s1 degismez. Eger degisiklik kalici olsun istersek birlesmis halini yeni bir degiskene atayabiliriz.

//* ----------------------------------------------------------

//* ----------------------------------------------------------

//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable

//* ----------------------------------------------------------

//* ----------------------------------------------------------

//* ----------------------------------------------------------

const myName = "AShLey Miller";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

//!toLocalUppercase("tr") türkce karaktere uygun olarak cevirir.Büyük i mesela

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const Control1 = (kelime1, kelime2) =>
  kelime1.toLocaleUpperCase() === kelime2.toLocaleUpperCase()
    ? `${kelime1} === ${kelime2}`
    : `${kelime1} != ${kelime2}`;

console.log(Control1("Mehmet", "meHMET"));
console.log(Control1("Hello", "Merhaba"));

//* ----------------------------------------------------------

//* ----------------------------------------------------------

//* ----------------------------------------------------------
//* charAt();

//* ----------------------------------------------------------

//* ----------------------------------------------------------

//* ----------------------------------------------------------

const cümle1 =
  "Merhaba \n bugün javascript dersinde string  \nmetodlari isliyoruz.";

console.log(cümle1);

console.log(cümle1.charAt(10));
//Bosluk ve \n de bir karakter olarak sayiliyor. Bosluk olarak gözükür ciktida
console.log(cümle1.charAt()); //Eger icini bos birakirsak ilk harfi döndürür.

console.log(cümle1.charAt(cümle1.length - 1));
