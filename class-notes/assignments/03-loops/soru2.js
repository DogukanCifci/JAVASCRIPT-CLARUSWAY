const randomSayi = Math.ceil(Math.random() * 20);
console.log(randomSayi);

tahmin();
function tahmin() {
  let tekrarCevap;
  let tahmin;
  let hak = 5;
  while (hak > 0) {
    tahmin = +prompt("Tahmininizi giriniz.");
    if (tahmin < randomSayi) {
      hak--;
      if (hak == 0) {
        alert("HAKKINIZ BITTI MAALESEF");
        break;
      } else {
        alert(`${hak} hakkiniz kaldi. SAYIYI ARTIR⬆️`);
      }
    } else if (tahmin > randomSayi) {
      hak--;
      if (hak == 0) {
        alert("HAKKINIZ BITTI MAALESEF");
        break;
      } else {
        alert(`${hak} hakkiniz kaldi. SAYIYI AZALT⏬`);
      }
    } else {
      alert("TEBRIKLER SAYIYI BILDINIZ 🥳");
      tekrarCevap = prompt("Oyunu tekrar oynamak ister misiniz ? (E/H)");
      if (tekrarCevap == "E" || tekrarCevap == "e") {
        continue;
      } else {
        break;
      }
    }
  }
}
