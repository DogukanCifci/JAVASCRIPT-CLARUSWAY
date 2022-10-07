//Ilk ekranda yemek resimleri API'den cekilecek

//Daha sonra bu veriler ekrana bastirilacak

//Arama inputunda arama yapma(oninput ile)
//e.target.value

//bayraklara tiklandiginda sadece o ülkenin yemeklerini göster
//tekrar ekrana bastir fonskiyonuna gönder

//const url = `www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

//API'den Veri Cekme
const input = document.querySelector(".form-control");
const display = document.querySelector(".food");
let dizi = [];

const getDataFromApi = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.meals);
      dizi = data.meals;
      pressDisplay(dizi);
    });
};

getDataFromApi();

//Ekrana bastirma
const pressDisplay = (items) => {
  items.forEach((e) => {
    display.innerHTML += `<div class="col-md-3 p-4 m-4"><p>${e.strMeal}</p>   <img class="malzeme" style=width:200px  src="${e.strMealThumb}" class="card-img-top" ></div>`;
  });
};

input.oninput = () => {
  console.log("sonra", dizi);
  const newArray = dizi.filter((a) =>
    a.strMeal.toLowerCase().includes(input.value)
  );
  display.innerHTML = "";
  pressDisplay(newArray);
};

document.querySelectorAll(".ulke").forEach((a) => {
  a.onclick = () => {
    console.log(a.id);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log("a", data);
        display.innerHTML = "";
        pressDisplay(data.meals);
      });
  };
});
