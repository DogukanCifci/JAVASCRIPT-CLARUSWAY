// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

let first = 5;
let second = 12;
let third = 345;

const fonksiyon = function () {
  first = 9;
  let second = 45;
  let dördüncü = 5678;
  console.log(first, second, third, dördüncü);
};

fonksiyon();
console.log(first, second, third); //first degisti dikkatli bak
