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

//* ----------------------------------------------------------
//* includes(); case sensitive

//* ----------------------------------------------------------

const kelime = "to be or not to be, that is the question.";

console.log(kelime.includes("o"));
console.log(kelime.includes("@"));
console.log(kelime.includes("TO BE")); //false because there is case sensitive
console.log(kelime.includes("to be"));
console.log(kelime.toUpperCase().includes("TO BE"));

console.log(kelime.includes("to be", 15)); // 15. indexten sonra to be var mi onu arar. //index yerine karakter yazamayiz.Karakterin indexini bulmaliyiz önce

//* ----------------------------------------------------------
//* indexOf() -lastIndexOf() --case sensitive

//* ----------------------------------------------------------

const kelime3 = "to be or not to be, that is the question.";

console.log(kelime3.indexOf("be")); //3 Bastan gelerek lk "be" yi bulur
console.log(kelime3.lastIndexOf("be")); //16 sondan gelerek ilk "be" yi bulur
console.log(kelime3.indexOf("abcdE")); //Olmadigi icin -1 döndürür.

//* ----------------------------------------------------------
// search()--case sensitive

//* ----------------------------------------------------------

const kelime4 = " to be or not to be, tHat is tHe question.";

console.log(kelime4.search(/[A-Z]/)); // Ilk büyük karakterin konumunu verir. Yoksa -1 döndürür

console.log(kelime4.search(/[0-9]/));

console.log(kelime4.search(/[0-9A-Za-z]/)); //1 verir. Boslugu algilamaz.Kosuldaki sarti ilk saglayan kücük harf oldugu icin onun indexini döndürdü
console.log(kelime4.search(/[^A-Z]/)); // Büyük harf disindakiler anlamina geliyor. //0 Verir cünkü boslugu da sayar.Cünkü bosluk Büyük harf disinda bir karakter

//* ----------------------------------------------------------
// startsWith() ,endsWith() --case sensitive

//* ----------------------------------------------------------

const kelime5 = "Salina salina sinsice!";
console.log(kelime5.startsWith("sa")); // false cünkü büyük s ile(S) basliyor
console.log(kelime5.startsWith("Sa")); // true

//Ikinci "sa" bulmak icin ;
console.log(kelime5.startsWith("sa", 7)); //7.karakterden itibaren ara dedim. 7. karaktersa ile basladigi icin true

console.log(kelime5.endsWith("!"));
console.log(kelime5.endsWith("i", 4)); //Bir sonraki indexi yazmaliyim.Son karakter sayilmadigi icin
console.log(kelime5.endsWith("salina", 13));

//* ----------------------------------------------------------
// replace(searchFor, replaceWith) --immutable

//* ----------------------------------------------------------

let oku = "Oku Johannes gibi, saf olma, saf olma";

let degisiklik = oku.replace("saf olma", "basarili ol"); //Ilk saf olma yi degistirdi. Ikincisi ayni kaldi.

console.log(degisiklik);
console.log(oku); // let oku üzerinde kalici degisiklik olmaz. Degisiklikleri yeni variable olan degisiklik 'e atadik.

console.log(oku.replace(/SAF/i, "fakir")); // Iki /..../ arasina kelimeyi yazip sonuna i---> (/..../i) eklersek case sensitive önemsiz olur.

//Yukarda sadece sectigimiz kelimenin ilk karsilasilanina etki ediyor. Daha sonrakine etki etmiyordu. Cünle icindeki bütün ayni kelimeleri degistirmek icin ;

console.log(oku.replace(/Saf olma/gi, "zengin ol")); // g bütün hepsi icin, i de büyük kücük harfe dikkat etme anlamina gelir ----> /...KELIME.../gi

//* ----------------------------------------------------------
// replaceAll() --immutable
//* ----------------------------------------------------------

let degistir = "Oku Johny gibi saf olma, saf olma";
console.log(degistir);
console.log(degistir.replaceAll("saf olma", "akilli ol")); //Bu sekilde de hepsini degistirebiliriz. Ambu yöntemle case sensitive olayini gkullanamiyoruz maalesef.Onun icin yukardaki metodu uygulayabiliriz. "/../gi yani"

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------

const söz = "UZUN INCE BIR YOLDAYIM YÜRÜYORUM GÜNDÜZ GECE";

console.log(söz.slice(10)); //Pythondaki liste[10:] metodu ile ayni
console.log(söz.slice(10, 17)); // Pythondaki liste[10:17] metodu ile ayni
console.log(söz.substring(10, 17)); // Yukardaki ile ayni sonucu verir.

console.log(söz.slice(-21, -15));
console.log(söz.slice(-11)); //-11. indexten cümlenin sonuna kadar
console.log(söz.substring(-11)); //Substring metodunda - index calismaz tüm cümleyi verir
