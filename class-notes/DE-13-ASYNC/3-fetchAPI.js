//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

/*
fetch("https://api.github.com/users")
  .then((data) => data.json()) //Öncelikle veriyi json formatina cevirmemiz gerekiyor.
  .then((item) => console.log(item)); //daha sonra da bu sekilde yazdirabiliriz veya veriye ulasabiliriz. 
  
  */

/***************************************** */
/***************************************** */
/***************************************** */
/***************************************** */
fetch("https://api.github.com/users").then((response) => console.log(response));
//Burda bazi degerler gözükecek ok, status, type vb. Altta da hata kontrolü yapmak icin burdaki ok status vb kullandik
const getButon = document.querySelector(".btn");

//Fonksiyon icinde tanimladik daha sonra butona tiklandiginda bu fonksiyon ile veriyi fetch ile cagirdik
const getData = () => {
  fetch("https://api.github.com/users")
    .then((response) => {
      if (response.ok == false) {
        throw new Error("Bir hata olustu"); //Hata olusup olusmadigini kontrol ettik
      } else return response.json(); //Artik köseli parantezle yazdigimiz icin disariya return ile göndermemiz gereikiyor
    })
    .then((data) => ekranaBastir(data)) //Burda kalabalik olmasi diye fonksiyon cagirdim. O fonksiyon icinde ekrana bastirma islemini yapacagim.json cevirdigim datalari fonksiyona göndermem gerekir
    .catch((err) => console.log(err)); //Eger yukarda bi yerde bir hata olursa burda hatamizi gösterecek.
};

getButon.onclick = () => {
  getData();
};

const ekranaBastir = (data) => {
  const userDiv = document.querySelector(".users");

  data.forEach((users) => {
    userDiv.innerHTML += `<h1 class='mt-4'>NAME:${users.login}<span class='text-danger'></span></h1>
    <img src=${users.avatar_url} width='50%' alt=""/>
    <h3>HTML_URL:${users.html_url}</h3>
    <h3>LOGIN:${users.login}</h3>`;
  });
};
