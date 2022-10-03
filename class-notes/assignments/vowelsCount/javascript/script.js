//girilen yazi

const metin = document.querySelector("#vowels");
const button = document.querySelector("button");
const display = document.querySelector(".display");

const pressDisplay = () => {
  display.innerHTML = `<p> There are ... vowels in ${metin.value}</p>`;
};

button.onclick = () => {
  pressDisplay();
  arrayCevirme();
};

//Sesli harf sayisini bulma
let counter = 0;
function arrayCevirme() {
  //Yukarda cagirirken yani daha önce cagirdigimizd icin sikinti olmamasini istiyorsak 3 fonksiyon tütü icinden bunu secmeliyiz
  let array = metin.value.split("");
}
