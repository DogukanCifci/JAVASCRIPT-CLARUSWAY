function oyun() {
  const randomSayi = Math.ceil(Math.random() * 20);
  console.log(randomSayi);

  function tahmin() {
    let cevap;
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
        break;
      }
    }
    cevap = prompt("Oyunu tekrar oynamak ister misiniz ?(E/H)");
    if (cevap == "E" || cevap == "e") {
      oyun();
    } else {
      alert("OYUNU SONLANDIRDINIZ. OYUNUMUZU OYNADIGINIZ ICIN TESEKKÜR EDERIM");
    }
  }
  tahmin();
}

oyun();
