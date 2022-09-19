//BASLIK KISMI ORTALAMA

const baslik = document.querySelector("h1");
baslik.style.textAlign = "center";
baslik.style.color = "red";

//RESIM TIKLAMA KISMI

const image = document.querySelector("img");

image.onmouseover = () => (image.src = "./img/aslan1.jpeg");

image.onmouseout = () => (image.src = "./img/aslan2.jpeg");

//BUTTON TIKLAMA
const aramaButon = document.querySelector("#btn-ara");
const ring = document.querySelector("#ringAudio");

aramaButon.onclick = () => {
  image.src = "./img/img.gif";
  ring.play();
};

const baglamaButon = document.querySelector("#btn-baglat");

baglamaButon.onclick = () => {
  image.src = "./img/telbağla.gif";
  ring.pause();
};

const konusmaButon = document.querySelector("#btn-konus");

konusmaButon.onclick = () => {
  image.src = "./img/telefon.gif";
};
