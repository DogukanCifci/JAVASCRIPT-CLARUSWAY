const body = document.querySelector("body");
const guess = document.querySelector(".guess");
let status1 = false;
let randomSayi = Math.floor(Math.random() * 21);
let score = 10;
// --------------------------localStorage da enYüksek adi altinda bir degisken olusturuyoruz
let topScore = localStorage.getItem("topScore") || 0; //localStorage'dan enYüksek getir. Eger öyle bir sey yoksa 0 olsun
document.querySelector(".top-score").textContent = topScore; //Hem burda hem de asagida bu yazdirma komutunu yazmaliyiz

document.querySelector(".check").onclick = () => {
  if (guess.value < 0 || guess.value > 20) {
    alert("Lütfen 0-20 arasinda bir sayi giriniz!");
  } else if (Number(guess.value) < randomSayi && score > 0) {
    document.querySelector(".msg").textContent = "Sayiyi Yükseltin 🔼";
    body.style.backgroundColor = "red";
    guess.value = "";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (Number(guess.value) > randomSayi && score > 0) {
    document.querySelector(".msg").textContent = "Sayiyi Azaltin 🔽";
    body.style.backgroundColor = "red";
    guess.value = "";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (Number(guess.value) == randomSayi && score != 0) {
    body.style.backgroundColor = "green";
    const alkis = document.querySelector("#alkis");

    alkis.volume = 0.3;
    document.querySelector(".msg").textContent = "Tebrikler Bildiniz...";
    document.querySelector(".number").textContent = randomSayi;

    if (score > topScore) {
      localStorage.setItem("topScore", score);
      topScore = score; //Eger score topScoredan büyükse localdeki topScore' u yeni score ile güncelle.
      //Aynisi ama sadece güncellemek icin bu sekilde yaziyoruz.
      document.querySelector(".top-score").textContent = topScore; //Hem burda hem yukarda bu topScore yazdirma komutunu yazdirmaliyiz
    }
    score = 0;
  } else if (score == 0) {
    document.querySelector(".msg").textContent = "GAME OVER";
  }
};
document.querySelector(".again").onclick = () => {
  score = 10;
  console.log("bastiktan sonra score", score);
  body.style.backgroundColor = "gray";
  randomSayi = Math.floor(Math.random() * 21);
  console.log(randomSayi);

  document.querySelector(".score").textContent = score;
  document.querySelector(".msg").textContent = "Starting..";
  document.querySelector(".number").textContent = "?";
  guess.value = "";
};

guess.onkeydown = (tus) => {
  if (tus.keyCode === 13) {
    document.querySelector(".check").click();
    guess.value = "";
  }
};
