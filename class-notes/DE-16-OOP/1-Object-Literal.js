//* ======================================================
//*                    (OOPS)
//Object Oriented Programming
//* ======================================================

const book1 = {
  title: "Karamazov Kardesler",
  author: "Dostoyevski",
  year: 1980,
  ozet: function () {
    return `${this.title} ${this.year} yilinda ${this.author} tarafindan yazilmistir.`;
  },
  //object icindeki bir degisken oldugu icin this kullanmaliyim.
};

console.log(book1);
console.log(book1.ozet());

const book2 = {
  title: "Nutuk",
  author: "Ataturk",
  year: 1925,
  ozet: function () {
    return `${this.title} ${this.year} yilinda ${this.author} tarafindan yazilmistir.`;
  },
};

console.log(book2);
console.log(book2.ozet());

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
// DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)
