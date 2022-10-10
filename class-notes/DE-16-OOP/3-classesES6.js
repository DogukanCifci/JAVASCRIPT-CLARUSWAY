//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
  constructor(parameter1, parameter2, parameter3) {
    this.author = parameter1;
    this.title = parameter2;
    this.year = parameter3;
    this.ozetFunction = function () {
      return `${this.title} ${this.year} yilinda ${this.author} tarafindan yazilmistir.`;
    };
  }

  yilHesapla() {
    return new Date().getFullYear - this.year;
  }
  //YilHesapla() fonksiyonu otomatik olarak Prototype'e gider. Cünkü constructor disinda ama class icinde yazilan her sey prototype'e gider. constructor  da temel insaattir.
}

const book1 = new Book("Ömer Seyfettin", "Kasagi", 1980); //parametreler yine ayni sekidle sirayla gidiyor.Bu yol daha basit

console.log(book1); //Burda yilHesapla()'nin prototype'e atandigini görebiliriz.

//* ======================================================
//*             INHERITANCE
//* ======================================================

//Book Objectinden Dergi Objectine kalip getir

class Dergi extends Book {
  constructor(author, title, year, d) {
    super(author, title, year); //bir üst class'dan bu yöntemle cagirilir
    this.month = d;
  }
}

//Prototype olarak atatdigimiz özellikler de burada otomatik olarak gelir(yilHesapla() örnegin)

const dergi1 = new Dergi("Dogukan", "Leman Dergi", 2019, "Ekim");
console.log(dergi1);
console.log(dergi1.ozetFunction());
