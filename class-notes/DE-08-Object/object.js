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
//* 3- Object literal (En Çok Kullanılan Yol)
//* ---------------------------------------------------------
