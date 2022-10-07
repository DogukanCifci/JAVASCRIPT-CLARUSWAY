const getCountry = async (countryName) => {
  try {
    const resp = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (resp.ok == false) {
      throw new Error("Burada kücük bir hata var!");
    }
    const data = await resp.json();

    console.log(data);
    console.log(data[0]);
    pressDisplay(data[0]);
  } catch (error) {
    console.log(error);
  }
};

let countryName = [
  "turkey",
  "canada",
  "germany",
  "peru",
  "sweden",
  "palestine",
];

countryName.forEach((country) => getCountry(country));

//EKRANA BASTIRMA
const display = document.querySelector("article");
const pressDisplay = (countries) => {
  console.log("asdasdsad", Object.values(countries.languages));
  console.log(
    "values",
    Object.values(Object.values(countries.currencies)[0])[0]
  );
  display.innerHTML += ` <div class="card text-start w-50 shadow-lg bg-light">
  <img src="${countries.flags.svg}" class="card-img-top" alt="...">
  <div class="card-body">
     <h5 class="card-title">${countries.name.official}</h5>
     <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
     <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i>${
       countries.capital
     } </li>
     <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values(
       countries.languages
     )}</li>
     <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>${
       Object.values(countries.currencies)[0].name
     } </li>
  </ul>
</div> `;
};
