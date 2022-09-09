let input;
let i = 0;
let notToplam = 0;

while (true) {
  input = prompt(
    `Lütfen Not${i} giriniz.Cikmak istediginizde 'q/Q' ya basiniz `
  );

  if (input != "q" && input != "Q") {
    try {
      input = +input;
      notToplam += input;
      i++;
    } catch (e) {
      alert("Hatali bir giris yaptiniz. Tekrar Deneyiniz!");
      continue;
    }
  } else {
    break;
  }
}

console.log(`Notlarin Toplami = ${notToplam}
Girilen Toplam Not Sayisi = ${i}
Notlarin Ortalamasi = ${notToplam / i}`);
