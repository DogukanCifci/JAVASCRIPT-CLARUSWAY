// 1C = 33.8F

let birim = prompt("Hangi derece birimi ile sicakligi yazacaksiniz ? (C/F)"); //1.Giris F --- 2.Giris C ---- 3.Giris K

let derece = Number(prompt("Dereceyi giriniz : ")); //1.Giris 100 ------ 2.Giris 100
if (birim == "C") {
  console.log(`${derece}${birim} = ${derece * 1.8 + 32}F`);
} else if (birim == "F") {
  console.log(`${derece}${birim} == ${((derece - 32) * 5) / 9}`);
} else {
  console.log("Yanlis birim girdiniz!");
}
