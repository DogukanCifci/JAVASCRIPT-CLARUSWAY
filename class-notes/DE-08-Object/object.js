//* ======================================================
//*                 (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! We can create an object with 3 methods
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const cars = new Object();
cars.marka = "BMW";
cars.engine = "1.6";
cars.model = "2021";

console.log(cars);
console.log(`CARS-MODEL -> ${cars.model}`);
//OR
console.log(cars["marka"]);

//* ---------------------------------------------------------
//* 2-  object constructor kullanalım
//* ---------------------------------------------------------

function Employee(id, name, salary) {
  this.empId = id;
  this.empName = name;
  this.empSalary = salary;
  console.log(this);
}
const kisi1 = new Employee(101, "Mehmet", 7000);
console.log(kisi1);

//* ---------------------------------------------------------
//* 3- Object literal (En Çok Kullanılan Yol)
//* ---------------------------------------------------------

const person = {
  name: "John",
  surname: "Depp",
  age: 55,
  job: "Actor",
  languages: ["JavaScript", "C+", "Python", "Java"],
};
console.log(person);
console.log(person.languages[3]);
console.log(person.name);
console.log(person["name"]);

//Information eklemek veya degistirmek icin ;

person.location = "USA";
person.age = 45;

console.log("Person yeni Bilgiler ---->>>", person);
console.log("Location eklendi-Yas güncellendi");

//* ---------------------------------------------------------
//* 3- Objects teki Yöntemler
//* ---------------------------------------------------------

const Mensch = {
  name: "Johny",
  surname: "Depp",
  birthday: 1989,
  job: "Actor",
  hasDriverLicense: true,
  ageCalculation: function () {
    return new Date().getFullYear() - this.birthday;
  },
  özet: function () {
    return `${this.name} is ${this.ageCalculation()} years old.`;
  },
};

console.log(Mensch.ageCalculation()); //33

console.log(Mensch.özet()); //Johny is 33 years old.

console.log(Mensch);

//!NOTE: arrow functions ın sözcüksel bağlamı vardır. Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz. Bir object in içindeki this keyword ü, global scope u (window) ifade ettiği için. this value nun global scope a bağlanmasını önlemek için, object yöntemi içindeki normal function u kullanın.

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.
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
console.log(people);

//örnek1 - people dizisindeki job'lari göster

people.forEach((a) => console.log(a.name, a["job"]));

//Kalici olarak orijinal listeyi degistirmek istersem ;
people.map((a, i, array) => (array[i].age = a.age + 1));
console.log(people);
