//* ======================================================
//*                    OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)

console.log("======================================================");
console.log("2.Js Dosyasi Baslangici");
console.log("======================================================");

function Book(parameter1, parameter2, parameter3) {
  this.author = parameter2;
  this.title = parameter1;
  this.year = parameter3;
  this.ozetFunction = function () {
    return `${this.title} ${this.year} yilinda ${this.author} tarafindan yazilmistir.`;
  };
  //Ama burda sirayla yazmak zorunda degilim.Sadece ne nereye geliyor ona dikkat etmeliyim
}

const kitap1 = new Book("Nutuk", "Ataturk", 1925);
const kitap2 = new Book("Karamazov Kardesler", "Dostoyevski", 1980); //Burdaki siralama parameter siralamasiyla ayni olmali. Sira önemli

console.log(kitap1);
console.log(kitap1.ozetFunction()); //Artik ObjectLiteraldeki kendi yazdigimiz format sekline gecti. Ayni sekilde cagirabiliyoruz bu yüzden

//Prototype ekleme. ==>Eklememizin nedeni özellikle cagirana kadar bellekte yer tutmamasi

//Direk bir keyword de ekleyebiliriz. Ya da fonksiyon da ekleyebilir ve ihtiyac halinde fonksiyonu sanki Objectin icindeymis gibi cagirabiliriz.
Book.prototype.tur = "Roman";
Book.prototype.yilHesapla = function () {
  yas = new Date().getFullYear() - this.year;
  return `${this.title} ${yas} yasindadir`;
};

console.log(kitap1); //console da prototype icinde görebilirsiniz
console.log(kitap2);
console.log(kitap1.yilHesapla()); //Prototypeden cagirma
console.log(kitap2.ozetFunction()); //Direk Object icinde tanimladigimiz fonksiyondan cagirma. Ayni hicbir farki yok.

kitap1.tur = "Hikaye"; //Object icinde direk böyle yeni bir keyword ekler. Varsa eskisini degistirir
//!!!!!!!!!!! __proto__ !!!!!
kitap2.__proto__.tur = "Masal"; //Ama bu sekilde prototypedeki tur'ü direk degistirebliriz.
