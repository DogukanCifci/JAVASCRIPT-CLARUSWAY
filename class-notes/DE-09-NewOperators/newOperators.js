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