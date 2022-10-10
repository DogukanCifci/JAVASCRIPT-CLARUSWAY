//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki işlev tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve işleve her çağrı yapıldığında, son tanımlanan işlev yürütülür.)(overloading=aşırı yükleme demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

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
  }
}

const dergi1 = new Dergi("Dogukan", "Leman Dergisi", 2022, "Eylül");

console.log(dergi1);
console.log(dergi1.ozetFunction());
