const sayi = Math.ceil(Math.random() * 20);
console.log(sayi);

let hak = 5;
let tahmin;

while (hak > 0) {
  tahmin = +prompt("Tahmininizi giriniz! (0-20)");
  alert(`Tahmininiz : ${tahmin} `);
  if (tahmin != sayi) {
    hak -= 1;
  }

  if (tahmin < sayi) {
    alert(`ARTIR , Kalan Hakkiniz : ${hak}`);
  } else if (tahmin > sayi) {
    alert(`AZALT  Kalan Hakkiniz : ${hak}`);
  } else if (tahmin == sayi) {
    alert("TEBRIKLER BILDINIZ!!!");
    break;
  }
}

if (hak == 0) {
  alert("Maalesef hakkiniz bitti!");
}
