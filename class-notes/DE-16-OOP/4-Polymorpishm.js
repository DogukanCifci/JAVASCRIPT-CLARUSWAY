//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki işlev tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve işleve her çağrı yapıldığında, son tanımlanan işlev yürütülür.)(overloading=Overkoading'iemektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

class Book {
  constructor(a, b, c) {
    this.author = a;
    this.title = b;
    this.year = c;
  }
  ozetFunction() {
    return `${this.title} ${this.year} yilinda ${this.author} tarafindan yazilmistir.`;
  }
}

//Burdan sonra yazacagim her sey prototype'e atanir aartik class icin ama constructor disi. Daha sonra extend yapinca da digerlerine de gider otomatik olarak

//=========OVERRIDING=========
//constructor kismi degistirilemez. Sadece prototypedekilere overriding yapilabilir
class Dergi extends Book {
  constructor(author, title, year, d) {
    super(author, title, year);
    this.month = d;
  }
  //overriding yapacagimiz fonksiyonu buraya yazariz.
  ozetFunction() {
    return `Kitap Adi : ${this.title} Yazari : ${this.author} Kitap Basim Tarihi : ${this.year}`;
    //Artik dergi classiyla olusturulmus bir sey cagirirsam ozetfunction yeni haliyle gözükecek
  }
}

const dergi1 = new Dergi("Dogukan", "Leman Dergisi", 2022, "Eylül");

console.log(dergi1);
console.log(dergi1.ozetFunction());

//
//===================OVERLOADİNG===================
// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez .
// İşte JavaScript'in İşlev Overkoading'i desteklemediğini gösteren küçük bir kod.

function foo(arg1) {
  console.log(arg1);
}
//Ayni fonskiyonu birden fazla defa tanimlarsak artik öncekilerin hicbir anlami yoktur. Hepsi silinmis gibi algilanir ve sadece en sonuncusu calisir

function foo(arg1, arg2) {
  console.log(arg1, arg2);
}

// Driver code
foo("Geeks"); //Geeks undefined ---> Ciktisi
//! Çıktı:
//!Geeks tanımsız
// Çıktıdaki "tanımsız" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar.
// Bu durumda, foo(arg1) öğesinin üzerine foo(arg1,arg2) tarafından yazılmıştır, ancak
// işleve yalnızca bir Argüman ("Geeks") ilettik. Bu, ikinci argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, "tanımsız" olarak yazdırılır.
// Overkoading'işlevinin JavaScript'te desteklenmediğini gördük, ancak Overkoading'işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te Overkoading'işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/
