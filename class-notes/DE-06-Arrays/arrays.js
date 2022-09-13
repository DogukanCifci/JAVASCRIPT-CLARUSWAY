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

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "8"];
//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes("5"));
console.log(sayilar1.includes(5));

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
console.log(sayilar1.indexOf("2"));
console.log(sayilar1.indexOf(2, 3)); //3.indisten sonraki ilk 2yi bul
console.log(sayilar1.lastIndexOf(5));
//*örnek

//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür

let sayiGiris = prompt("Bir sayi giriniz");
sayiGirisNumber = +sayiGiris;

if (sayilar1.includes(sayiGiris) && sayilar1.includes(sayiGirisNumber)) {
  console.log(
    "Girdiginiz sayinin hem string hali hem de number hali bulunuyor"
  );
} else if (
  sayilar1.includes(sayiGiris) &&
  sayilar1.includes(sayiGirisNumber) == false
) {
  console.log("GHirilen Sayinin sadece string hali bulunuyor.Number Hali yok.");
} else if (
  sayilar1.includes(sayiGiris) == false &&
  sayilar1.includes(sayiGirisNumber)
) {
  console.log("Girilen Sayinin  string hali bulunmuyor.Number Hali mevcut.");
} else {
  console.log(
    "Girilen sayinin number hali ve string hali listede mevcut degil"
  );
}
console.log("***********");

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join(" ")=>virgül+boşluk sil boşluklarla (join parantezinde 2 varsa her eleman arasına 2 koy) ayır
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez
//sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "8"]
console.log(sayilar1.join(" "));
console.log(sayilar1.join("-"));
console.log(sayilar1.join("aaa ")); //Elemanlar arasina join icine yazdigimiz seyi getirir.
console.log(sayilar1.join()); //Hicbir sey  yazmazsam "," ile ayirir
//*dizinin 2 indexli elemanını tersten string olarak yazdır
const meyveler3 = [
  "Armut",
  "Ayva",
  "Mango",
  "Cilek",
  "Erik",
  "Karpuz",
  "Kavun",
  "Muz",
];

//Sadece dizilerde gecerli oldugu icin önce dizi icindeki elemani da split() metodu ile diziye cevirmem lazim
const kelimeListHali = meyveler3[2].split("").reverse();
console.log(kelimeListHali);

//Tekrar eski halone getirmek icin join ile birlestirirz.
const birlestirmeTekrar = kelimeListHali.join("");
console.log(birlestirmeTekrar);
// veya direk kisaca

const kelimeListHali2 = meyveler3[5].split("").reverse().join("");
console.log(kelimeListHali2);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString()); //* -->.join(",") ayni
//* slice()
//*-----------------------------------------------------------

const arabalar = ["bmw", "mercedes", "audi", "volvo", "ferrari"];
console.log(arabalar.slice(1, 3)); //1 dahil 3 dahil degil python[1:3] ile ayni

const arabalarCopy = arabalar.slice(0);
console.log(arabalarCopy);

//* concat()
//*-----------------------------------------------------------
const list1 = [1, 3, 5, 12, 6, 7, 9];
const list2 = ["ali", "ahmet", "muhammed", "mustafa"]; //Tek bir eleman olarak degil 2 farkli eleman olarak listeye girer.
console.log(list1.concat(list2));

//Eger tek bir eleman olarak eklemek istersem liste icinde liste olarak yazariz.

const list3 = [[77, "9822"]];
console.log(list1.concat(list3));

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas = [21, 12, 35, 44, 67, 76];
console.log(yas.every((a) => a > 18)); //Bir tane bile 18den kücük sayi bulursa false verir.Eger tüm elemanlar sarti sagliyorsa ture döndürür.Sadece 12 yüzünden false döndürür

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((a) => a <= 18)); //Burda da sarti saglayan bir tane bile eleman olsa true verir sonucu

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin

console.log(yas.find((a) => a > 30)); //Elemanlar arasinda 30 dan büyük karsilastigi ilk sayiyi döndürür.

console.log(yas.findLast((a) => a >= 30)); //listenin sonunda baslayarak 30 dan büyük veya esit karsilastigi ilk elemani döndürür.

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

console.log(yas.findIndex((i) => i > 45));
//Liste elemanlarindan 45ten büyük olan ilk elemanin indexini dönder
