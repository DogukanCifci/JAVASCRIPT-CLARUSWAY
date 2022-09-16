//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
  title: "BMW",
  model: 1990,
  engine: 1.6,
};

//First way

console.log(car.model); //Tercih edilen print yolu
console.log(car["model"]);

//Second way destructuring

const { title, engine } = car; //Önce bu sekilde keyleri acarsak alt tarafta dire keyleri yazarak yazdirabilirim
console.log(title, engine); //Tekrardan car.title veya car.engine yazmak zorunda kalmam. bütün keyleri yazmak zorunda degilim. iStediklerimi yapabilirim.

//** NESTED OBJECT EXAMPLE */
//Object icinde baska object tanimlayabilirim.
const arabalar = {
  car1: {
    title1: "BMW",
    model1: 1990,
    engine1: 1.6,
  },
  car2: {
    title1: "Mercedes",
    model1: 1980,
    engine1: 2.0,
  },
};

const { car1, car2 } = arabalar;
const { title1, engine1, model1 } = car1;
console.log(title1, engine1, model1); //BMW 1990 1.6
//car1 icin model1, title1, engine1 kullandigimiz icin car2 yi acarken ayni isimleri kullanamayiz. Onun icin car2ye yeni keyler verdik
const { title1: baslik1, model1: tür1, engine1: motor1 } = car2;

console.log(baslik1, tür1, motor1); //Mercedes 1980, 2.0

//Bu sekilde komple yazdirabiliriz.OBJECT OBJECT ICINDE GEZINME
for (let i in arabalar) {
  console.log(arabalar[i]);
}

//!!!Ama burda for of ve forEach gibi metodlar kullanilamaz. Burda sadece for in ve normal for kullanilabilir.Cünkü objectler iterable degil

//////****************ANOTHER EXAMPLE */
//* EXAMPLE: Array-Object Icinde Gezinme !!!This is not OBJECT-OBJECT!!!
console.log("Array-Object Example");
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

//1.Yöntem for of (for in veya normal for) kullanabiliriz. Cünkü bu bir dizi
for (let i of people) {
  console.log(i);
}

//2.Yöntem forEach() kullanabilirim

people.forEach((item) => {
  console.log(item.name, item.age, item.job);
  //veya 2.yöntemde yine newOperators kullanabilirim

  console.log("newOperators ile yazimi(-------------)");
  const { name, surname, job, age } = item; //item dedim cünkü her 1 elemani item temsil ediyor. Tüm döngüye yazamam

  console.log(surname, job, age);
});

//Fonksiyonlarda destructing nasil yapiliyor ?

const yazdir = (b) => {
  const { id, name } = b;
  console.log(id, name);
};

const a = { id: 1, name: "Muhammed" };

yazdir(a);

//ama bunu icerde parcalayacagimiza direk fonsiyonun paramaetre yerinde yapabilirim.
console.log("*************Daha kisa yolla ****");

const yazdir1 = ({ id, name }) => {
  console.log(id, name);
};
const a1 = { id: 1, name: "Muhammed" };
yazdir1(a1);

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT

const personel = {
  pName: "Johny",
  surname: "Depp",
  job: "Actor",
  age: 44,
};

// "..." kullanarak kalan secmedigim keyler farkli bir objecte saklanmis olur
const { pName, ...gerisi } = personel;

console.log(pName);
console.log("--------");
console.log(personel);
console.log(gerisi);
console.log(gerisi.surname, "----->... ile olusturdugum objectten aldigim"); //gerisi de artik personel gibi secmedigim keyelerden olusan bir objext oldu.alttaki console.log ile ayni sonucu verir
console.log(personel.surname, "---->Normal orijinal objectten aldigim");

//****OBJECT KOPYA */
console.log("");
console.log("OBJECT TAMAMI KOPYALAMA 1. YÖNTEM");
const ikizPersonel = personel;

console.log(ikizPersonel);
//2.yöntem
console.log("");
console.log("2. ... ile kopyalama yöntemi");
const { ...personelGerisi } = personel;
console.log(personelGerisi);

//****!!!!!!!!!!!!!IMPORTANTT!!!!!!!!!! */
console.log("***********-------------***********");
console.log("************************");
//* orjinal diziden farklı bir kopya dizi oluşturduk, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz
personelGerisi.age = 40;
console.log(personel);
console.log(ikizPersonel);
console.log(personelGerisi);

console.log("************************");
//*orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu kopyaya yaptığımız ekleme çıkarma değişiklik, orjinal diziyi de bozar
ikizPersonel.age = 100;
console.log(personel);
console.log(ikizPersonel);
console.log(personelGerisi);

//****** REST ARRAYS ***********-------------***********" */

const autos = ["anadol", "renault", "bmw", "mercedes", "ferrari"];
console.log("");
console.log("----");

//Bu sefer dizi icin yaptigimizdan dolayi köseli parantez kullanrak yaptik
const [birinci, ikinci, ...autoGerisi] = autos;

console.log(birinci, ikinci);
console.log(autoGerisi);

//*ARRAY kopya
console.log();
console.log("----------");
const esasNumber = [10, 20, 30, 50];
const ikizNumber = esasNumber;
const [...esasNumberGerisi] = esasNumber;

console.log(esasNumber);
console.log(ikizNumber);
console.log(esasNumberGerisi);

console.log();
console.log("... ILE OLUSTURDUGUM KOPYAYA DEGISIKLIKTEN SONRA");
console.log("-----------");

esasNumberGerisi.push(9999);
console.log(esasNumber);
console.log(ikizNumber);
console.log(esasNumberGerisi); //"Sadece degisiklik yaptigimiz ... kopya degisti.Digerlerinde bir degisiklik olmadi"

console.log(
  "Sadece degisiklik yaptigimiz ... kopya degisti.Digerlerinde bir degisiklik olmadi"
);

console.log();
console.log("ikizNumber = .. ILE OLUSTURDUGUM KOPYAYA DEGISIKLIKTEN SONRA");

console.log("-----------");

ikizNumber.unshift(222);
console.log(esasNumber);
console.log(ikizNumber);
console.log(esasNumberGerisi); //Bu sfer orijinal olan da degisti

console.log("Bu sfer orijinal olan da degisti");

//! 2.)) Bir fonksiyonun argümanlarini diziye cevirmek icin kullanilabilir.

const sum = (x, y) => x + y;
console.log(sum(3, 5)); //8

console.log(sum(1, 2, 3, 4, 5, 6, 7)); //Hata vermez ama ilk iki elemani alir sadece.

//*2.yol

//Bu sekilde 2den fazla degisken yollanirsa onu listeye cevirebiliriz bu sekilde
const sum2 = (...sayilarListeHali) => {
  console.log(sayilarListeHali);
  console.log(sayilarListeHali.reduce((a, b) => a + b));
};

sum2(1, 2, 3, 4);

//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

const zeugs = ["Aircraft", "Helicopter", "Bicycle"];
const automobiles = ["Trucks", "Bus", "Car", "SUV"];

console.log(zeugs.concat(automobiles));
console.log(zeugs + automobiles);
console.log([zeugs, automobiles]);

console.log();
console.log("-----------");
console.log();

const birlesik = [...zeugs, ...automobiles]; //concat yapmisim gibi birlestirmis oldu
console.log(birlesik);

//Bu sekilde istedigim gibi birlesitirp araya sona bir  seyler ekleyebilirim.Mesela ;
console.log("-----");
const birlesik2 = [
  ...zeugs,
  "Merhaba",
  "Ikinci",
  ...automobiles,
  "Sona ekledigim eleman",
];

console.log(birlesik2);

//BIR KELIMEYI SPLIT KULLANMADAN LISTEYE CEVIREBILIRIM

let word = "Hello Almany";

console.log(...word); //Bu listesiz olarak tüm harfleri ayirarak verir
console.log([...word]); //Bütün harfleri ayri ayri listeleyerek verir
