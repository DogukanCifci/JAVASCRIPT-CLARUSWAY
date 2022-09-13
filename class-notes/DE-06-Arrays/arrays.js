// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//1. Ve TERCIH EDILEN YÖNTEM----

const yaslar = [30, 54, 22, 18, 5]; //const oldugu icin degistirilemez. set gibi pythondaki

console.log(yaslar);

//2.YÖNTEM--------(ARRAY CONSTRUCTOR)

const cars = new Array("BMW", "Mercedes", "Audi", "Volvo");
console.log(cars);

//Bunun ekstra özelligi daha önceden arrayin eleman sayisini belirtebiliyoruz.

const sayilar = new Array(10);
console.log(sayilar); // [empty x 10]

sayilar[4] = 257;
console.log(sayilar); //[empty x 4, 257, empty x 5]

sayilar[9] = "Ali";
console.log(sayilar);

console.log(
  "**********************************************************************"
);
console.log(
  "**********************************************************************"
);
console.log(
  "**********************************************************************"
);

const dogum = 1996;

const isimler = [
  "Faruk",
  "Güler",
  "Mevlüt",
  2022 - dogum,
  "Sinan",
  true,
  20,
  yaslar,
];

console.log(isimler);

//Dizinin elemanlarina yeni veri yazma-atama

isimler[6] = false;
console.log(isimler);

console.log(--isimler[7][2]); //Direk üzerinde oynama yapabilirim.Üzerinde kalici bir degisiklik yapti.(Elemani 1 azalttik)

console.log(isimler);

// ?=========================================================
// ?                DİZİLERI DEGISTIREN METODLAR
// ?=========================================================

//* pop() ---> Dizinin son elemanini siler ve sildigi elemani döndürür

console.log(isimler.pop()); //Listeyi sildi ve listeyi döndürdü
console.log(isimler); //Liste artik silinmis.Yani kalici degisiklik oldu

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

console.log(meyveler, "sildigim meyve --->", meyveler.pop());

//*Normalde meyveler dizisini silme isleminden önce yazmama ragmen silinme aliglanmis. önce ya da sonra silme komutu degismiyor.

//**********************************************************************
//* shift() --> dizinin ilk elemanini siler yadirirsak silinen elemani gösterir

const silinenMeyve = meyveler.shift();

console.log(meyveler, "silinen meyve ->", silinenMeyve);

//**********************************************************************
//*push() dizinin sonuna eleman ekler. Yazdirirsak o esnada, dizinin son halinin uzunlugunu verir

const sonHal = meyveler.push("Cilek", "Kavun", "Karpuz");
console.log(meyveler);
console.log("Dizinin son halinin eleman sayisi --> ", sonHal);

//**********************************************************************
//*unshift() dizinin basina eleman ekler. Yazdirirsak o esnada, dizinin son halinin uzunlugunu verir
console.log("------", meyveler.unshift("Ayva"), "----", meyveler);

//**********************************************************************
//*reverse() diziyi ters cevirir.Kalici degisiklik yapar

meyveler.reverse();
console.log(meyveler);

//Ben dizi icindeki bir eleamni ters yazdirmak istersem önce o elemani da harfleriyle diziye cevirmemiz gerekiyor.Cünkü reverse() dizilere ait bir metoddur.

console.log(meyveler[4].split("").reverse()); //Önce split ile harflerine ayirdik ve listeye cevirmis oldu. Daha sonra istersek .join() ile harfleri birlestirip kelime olusturabiliriz

//**********************************************************************
//*sort()

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

console.log(number.sort()); //Siraladi ama ilk sayilara bakarak siraladi.

//Onun icin su sekilde yazmaliyiz

number.sort((a, b) => a - b);
console.log(number);

//String ifadcelerde sikinti olmuyor.

meyveler.sort();
console.log(meyveler); //Türkce karakterleri sona atar. Cünkü ASCII tablosunda daha sonraki siralarda bulunur.(farklik karakter gibi algilanir)

//**********************************************************************
//*splice()

//['Armut', 'Ayva', 'Cilek', 'Erik', 'Karpuz', 'Kavun', 'Muz']

meyveler.splice(2, 0, "Mango"); //2.indisteki elemani saga kaydirarak Mango listeye eklenir. meyveler[] -->metodu ile silmeden ekleme yapamadigimiz icin burda splice metodu ile silmeden ekleme yapabiliriz.
//Parantez icindeki 0 silme anlamina 2 ise 2. indise ekle anlamina geliyor
console.log(meyveler);
// 0 yerine bir yazarsak elemani siler.
