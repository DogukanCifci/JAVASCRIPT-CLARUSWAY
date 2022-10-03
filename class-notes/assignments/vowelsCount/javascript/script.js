//girilen yazi

const metin = document.querySelector("#vowels");
const button = document.querySelector("button");
const display = document.querySelector(".display");
let array = [];

let counter = 0;
const pressDisplay = () => {
  if (counter == 1)
    display.innerHTML = `<p> There is ${counter} vowels in "${metin.value}" </p>`;
  else
    display.innerHTML = `<p> There are ${counter} vowels in "${metin.value}" </p>`;
};

button.onclick = () => {
  arrayCevirme();
  pressDisplay();
  sifirla();
};

//Sesli harf sayisini bulma

function arrayCevirme() {
  //Yukarda cagirirken yani daha önce cagirdigimizd icin sikinti olmamasini istiyorsak 3 fonksiyon tütü icinden bunu secmeliyiz
  array = metin.value.split("");

  array.forEach((letter) => {
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "ı" ||
      letter == "i" ||
      letter == "o" ||
      letter == "ö" ||
      letter == "u" ||
      letter == "ü"
    ) {
      counter++;
    }
  });
}

//Ard arda 2 defa basilirsa onu düzeltmek icin
function sifirla() {
  array = [];
  counter = 0;
}

//Entera basildiginda algilamasi icin
metin.onkeydown = (tus) => {
  if (tus.keyCode === 13) {
    document.querySelector("button").click();
  }
};
