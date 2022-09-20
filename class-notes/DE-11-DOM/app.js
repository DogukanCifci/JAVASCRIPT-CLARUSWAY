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
  ring.volume = 0.1; //Sesin yüksekligini 0 ile 1 arasinda ayarlayabiliriz.
};

const baglamaButon = document.querySelector("#btn-baglat");

baglamaButon.onclick = () => {
  image.src = "./img/telbağla.gif";
  ring.pause();
};

const konusmaButon = document.querySelector("#btn-konus");

konusmaButon.onclick = () => {
  image.src = "./img/telefon.gif";
  ring.pause();
};

//Inputlarin Cekildigi Kisim

//Klavyeden inputa veri girisi yapilirken elimizi tustan cektigimizde var olan degisiklik
const text = document.querySelector("#textbox");
const tik = document.querySelector("#checkbox");

//checked metodu checkbox inputunun secilmis olup olmadigini kontrol eder. Tikliyse true döndürür
text.onkeyup = () => {
  if (tik.checked == true) {
    text.value = text.value.toUpperCase();
  } else {
    text.value = text.value.toLowerCase();
  }
};

//!listemin başına h1 tag i eklemek

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
const liste = document.querySelector(".liste"); //
// const baslık = document.createElement("h1"); //bir adet h1 elementi olusturduk ici bos
// baslık.className = "a"; //baslik isimli h1 e "a" diye bir class atadik
// const yazi = document.createTextNode("Programlama Dilleri"); //Bagimsiz bir yazi suan
// baslık.appendChild(yazi); //Burda baslik isimli h1 elementi ile  yazi isi,li bos texti bagdastiriryoruz.
// inputDiv.after(baslık); //input-div'in sonrasina h1'i ekliyoruz.

const bolum = document.querySelector("section");
bolum.innerHTML =
  `<h1 class="a text-center">${"Programlama Dilleri"}</h1>` + bolum.innerHTML;
//Yeni element eklemeyi bu sekilde de yapabilirim. Bu yeni ekledigimiz baslik liden önce gözüksün ve eski elemanlar silinmesin diye bolum.innerHTML ekledik ama basliktan sonra ekledik.

//bolum.innerHTML = bolum.innerHTML + `<h1 class="a">${"Programlama Dilleri"}</h1>` yapsaydik o zaman baslik listeden sonra gelir

//============================================================
//EKLE BUTONUNA BASILDIGINDA INPUTA GIRILEN UL LIsteme eklensin
//*UZUN YOL
// yeni girilen satiri saklamak icin bir li olusturduk.
// const yeniLi = document.createElement("li");
// yeni li icin textnode olusturduk
// const textNode = document.createTextNode(language.value);
//olusturdugumuz texnode'u yeni li'ye bagladik.
// yeniLi.appendChild(textNode);
// yeni eklenen satiri var olan listeye (ul) baglayalim.
// liste.appendChild(yeniLi);

document.querySelector(".ekle").onclick = () => {
  const liste = document.querySelector(".liste");
  const dil = document.querySelector(".dil");

  liste.innerHTML = liste.innerHTML + `<li>${dil.value}</li>`;
  dil.value = "";
};

//!Sil butonuna tiklandiginda ul listesinden silme metodu olan removeChild metodunu kullanicaz.
console.log(liste);

document.querySelector(".sil").onclick = () => {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.lastElementChild); //ul'nin son elemanini silme komutu
  //liste.removeChild(liste.firstElementChild); //ul'nin ilk elemanini silme komutu

  // liste.removeChild(liste.children[2]); 2.indisteki yani 3.elemani sildirir.
};

//Klavyedeki key-code lari kullanarak input girisini alma

document.querySelector(".dil").onkeydown = (tus) => {
  //Yani entera basilirsa anlamina geliyor
  if (tus.keyCode === 13) {
    document.querySelector(".ekle").click(); //Sanki .ekle ye tiklanmis gibi olsun anlami
    //Yani ekleye tiklandiginda yukarda ne gerceklesmesini istiyorsak burada da aynisi olacak
  }
};
