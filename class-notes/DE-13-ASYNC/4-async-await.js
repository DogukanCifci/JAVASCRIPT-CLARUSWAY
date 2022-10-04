//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesi ile kodun calismasi devam eder.

//******* */
//await her zaman async fonksiyonun icinde yazilabilir.
//await ile veri gelene kadar bekle diyoruz.
//Digerinden farkli olarak burda .then ile devam etmiyorum.
//Bir degiskene atayip daha sonra direk onun üzerinden devam ediyorum.

//Hata kontrolü yapmadan
const getUsers = async () => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");

  const data = await response.json();
  console.log(data);
};

getUsers();

//Hata kontrolü ile :

console.log("--------------HATA KONTROLÜ ILE-----------");

const getUsers2 = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    console.log(response); //Bu response ile sitenin yüklenip yüklenmedigini, bir hata olusup olsumadigini "ok" ile kontrol edebiliriz.

    if (response.ok == false) {
      throw new Error(`Biraz hata var burada ${response.status}`); //throw ile hatayi firlattim.
      //!hatanın ne olduğunu kendi cümlemizle görebiliriz, ama try catch siz throw olursa, hata durumunda kod burada durur, alttaki kodlar çalışmaz. bu yüzden try-catch kullanmalıyız
    }
    const data = await response.json();
    console.log(data);
    pressDisplay(data); //Ekrana bastirmak icin burdan data yolladik
  } catch (error) {
    // Eger firlatilan bir hata varsa cath ile de yakaladim.
    console.log(error);
    console.log("try-catch sayesinde hata varsa bile devam..");
    display.innerHTML = `
    <h1>An Error Occured</h1>
    <img src="./images/error.webp"/>`;
  } finally {
    console.log(
      "(FINALLY)Burasi hata olup olmamasindan bagimsiz bir sekilde her durumda calisacak..."
    );
  }
};

getUsers2();

//EKRANA BASTIRMA

const display = document.querySelector(".users");

const pressDisplay = (data) => {
  console.log(data);
  data.forEach((users) => {
    display.innerHTML += `
    <h2 class="text-success">Name: ${users.show["name"]}</h2>
    <img src="${users.show.image.medium}" width="40%"/>
    <h3 class="fst-italic">${users.show.genres}</h3><br/>
    `;
  });
};
