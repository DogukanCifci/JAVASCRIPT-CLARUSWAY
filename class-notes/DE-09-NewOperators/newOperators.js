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
