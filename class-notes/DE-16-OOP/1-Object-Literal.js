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
