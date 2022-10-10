const display = document.querySelector(".row");
let myArray = [];
const inputBox = document.querySelector(".form-control");

let areaList = [];

//Veriyi API'den cekme
const getMealDataFromApi = async () => {
  //https request url
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  const response = await fetch(url).then((data) => data.json());
  //console.log(response);
  myArray = response.meals;
  console.log(myArray);

  pressDisplay(myArray);
  searchFood();
};

getMealDataFromApi();

//Ekrana Bastirma

const pressDisplay = (myArray) => {
  myArray.forEach((e) => {
    //Destructiring
    const { strMeal, strMealThumb } = e;

    display.innerHTML += ` <div class="col-md-3 p-4 m-4 bg-warning"><p>${strMeal}</p>   <img class="malzeme" style=width:200px  src="${strMealThumb}" class="card-img-top" ></div>`;
  });
};

//Yemek arama
//with filter() new filtered array created and matching controlled

function searchFood() {
  inputBox.addEventListener("input", () => {
    //Matching control
    display.innerHTML = "";
    const myNewFilteredArray = myArray.filter((e) => {
      return e.strMeal.toLowerCase().includes(inputBox.value.toLowerCase());
    });
    pressDisplay(myNewFilteredArray);
  });
}

//to find the country of the food
areaList = myArray.forEach((e) => console.log(e.strArea));
console.log(areaList);
