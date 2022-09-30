//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

fetch("https://api.github.com/users")
  .then((data) => data.json()) //Öncelikle veriyi json formatina cevirmemiz gerekiyor.
  .then((item) => console.log(item)); //daha sonra da bu sekilde yazdirabiliriz veya veriye ulasabiliriz.
