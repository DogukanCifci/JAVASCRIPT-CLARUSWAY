// Task 1: Code a Person class
//FROM Meta
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;

    this.sleep = function () {
      this.energy += 10;
      return this.energy;
    };
    this.doSomethingFun = function () {
      this.energy -= 10;
      return this.energy;
    };
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;

    this.goToWork = function () {
      this.xp += 10;
      return this.xp;
    };
  }
}

// Task 3: Code an intern object, run methods

const intern = new Worker("Bob", 21, 110, 0, 10);
intern.goToWork();

// Task 4: Code a manager object, methods

const manager = new Worker("Alice", 30, 120, 100, 30);
manager.doSomethingFun();

console.log(intern);
console.log(manager);
