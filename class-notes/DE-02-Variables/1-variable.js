//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================

// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const yas = 25;

console.log(yas);

//yas = 27; // Burda hata verir cünkü yukarda degiskeni const ile tanimladik.

//const pi ; --> hata verir. Cünkü const da degiskene bir sey atamaliyim

const kelime = "ahmet";

console.log(kelime, typeof kelime);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil; //const aksine burda direk deger atamadan variable olusturabiliyorum
dil = "javascript";
console.log(dil);

dil = true;

console.log(dil, typeof dil);

//! değişken tanımlama keyword u kullanmasak bile JS derleyicisi otomatik  onu "var" olarak tanımlar

// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

console.log("*************************************");

var ilk = "GLOBAL";

console.log(ilk);
{
  console.log(ilk);
  ilk = "SÜSLÜ";
  console.log(ilk);
}

console.log(ilk); //Degismis bir sekilde cikti. //Eger let ile atasaydik burada fonksiyon disinda atadigimiz "GLOBAL" cikti olarak gözükecekti. Örnegi asagida var

//var keywordu olunca fonskiyon icinde veya disinda da erisebiliriz.

console.log("*************************************");

let first = "osman";
console.log("ilk hali --> ", first);

{
  // console.log(first); -->Burda hata verir cünkü disradaki degere ulasamiyoruz let verdigimizde. let verince icerdeki olay tamamen ayri ve kendi icinde degerlendirilir. Disariya ulasamayiz. Disardan da fonksiyon icindeki degere ulasamyiz.

  let first = "degismis yani fonksiyon icerdeki hali";
  console.log(first);
  let iki = "merhaba";
}

console.log("fonksiyon disindaki hali -->", first);
// console.log(iki); --> Bu da iceriye erisemez ve hata verir

//const olayi

console.log("*************************************");

//const da let ile ayni sekilde. Icerdeki farkli bir dosyaymis gibi

const isim = "Dogukan";

console.log(isim);

{
  const isim = "Mehmet"; //Normalde const degistirememize ragmen , burada degistirebildik. Cünü fonksiyon icinde olan tamamen ayri dünyadir.
  console.log(isim);
}
