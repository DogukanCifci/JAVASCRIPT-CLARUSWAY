function toplama(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40;

let counter = 0;
let localCounter = 0;

function inc(amount = 1) {
  counter += amount;
  return counter;
}

function dec(amount = 1) {
  counter -= amount;
  return counter;
}

const moduleName = "Module 1";
//Sadece 1 tane export default yapilabilir
//export default moduleName
//export default "Module 1"

export default (sayi) => sayi * sayi;

//Bu sekilde icerdeki istedigimiz verileri disari aktarabiliriz
export {
  WORKING_HOURS_WEEK,
  WORKING_HOURS_WEEK as WHW,
  toplama as sum,
  inc,
  dec,
  counter,
};

console.log("Module1 is loaded!");
