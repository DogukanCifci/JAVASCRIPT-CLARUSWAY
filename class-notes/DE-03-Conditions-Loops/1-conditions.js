// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!------------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

const num1 = prompt("Enter the first number :");
let islem = prompt("Enter the operation: + - * /");
const num2 = prompt("Enter the second number : ");
let sonuc = 3;
if (islem == "+") {
  sonuc = Number(num1) + Number(num2);
} else if (islem == "-") {
  sonuc = num1 - num2; //Basina Number yazmasam da sayi olarak görüyor Sikinti olmuyor -->ama bu sadece cikarma carpma ve bölme icin. Toplama isleminde numbera cevirmemiz lazim
} else if (islem == "*") {
  sonuc = Number(num1) * Number(num2);
} else if (islem == "/") {
  if (num2 != 0) {
    sonuc = num1 / num2;
  } else {
    alert("Sayi 0 a bölünemez!");
  }
} else {
  alert("Yanlis islem girdiniz!!");
}

alert(sonuc); // Yukardakini let ile tanimladigim icin o sonuc sadece o if in icine ait oldu. Ama önüne let yazmazsam otomatik olarak degistirir. Bunun sonucu da degismis olur.(En son let'siz yazdim)!

// !!!!! Eger süslü icinde fonksiyon icinde globalde olmayan bir degiskeni let veya const falan yazmadan direk atarsam o artik ortalik mali olur ve fonksiyon disinda da gözükür.

const cinsiyet = "Erkek";
const saglikDurumu = true;
const yas = 22;

if (cinsiyet == "Erkek" && saglikDurumu == true && yas >= 18) {
  console.log("Askerlik yapmaya uygundur");
} else {
  console.log("Askerlikten muaftir");
}

//*******SWİTCH-CASE */

console.log("-------------------------------------");
console.log(" *****==SWİTCH-CASE== 4 Islem Hesap Makinesi ****** ");
console.log("-------------------------------------");
const n1 = Number(prompt("1.Sayiyi Giriniz:"));
const islem1 = prompt("Islemi giriniz: +,-,*, /");
const n2 = +prompt("2.Sayiyi Giriniz:"); //Basina + koymak number yazmakla ayni sey

let sonuc1 = 0;

switch (islem1) {
  case "+":
    sonuc1 = n1 + n2;
    break;
  case "-":
    sonuc1 = n1 - n2;
    break;
  case "/":
    if (n2 != 0) {
      sonuc1 = n1 / n2;
    } else {
      console.log("0 a bölünmez");
    }
    break;
  case "*":
    sonuc1 = n1 * n2;
    break;
  default:
    console.log("Yanlis islem girdiniz!!!");
    break;
}

console.log(`${n1} ${islem1} ${n2} = ${sonuc1}`);

//******TERNARY  ********/

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.
const asgariUcret = 5500;
let maas = +prompt("Maasinizi giriniz : ");

const zamliMaas =
  maas <= asgariUcret ? (maas += maas * 0.4) : (maas += maas * 0.1); //veya maas*1.25 : maas*1.1 (Ayni mantik)

// : else ? if anlamina gelmektedir

console.log(zamliMaas);

//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız
const maas2 = +prompt("Maasinizi giriniz : ");
const borc = +prompt("Borcunuzu giriniz : ");

console.log(maas2 * 10 - borc >= 5000 ? "Kredi alabilir🥳" : "Kredi alamaz😥 ");
