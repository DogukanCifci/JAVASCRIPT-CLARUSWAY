// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//Ekrana 10 kere MERHABA yazdirin

for (let i = 1; i <= 10; i++) {
  console.log("MERHABA");
  console.log(i);
}

let N = +prompt("Bir sayi gir");
let toplam = 0;
for (let i = 1; i <= N; i++) {
  toplam += i;
  console.log(toplam);
}

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

let num = +prompt("Bir sayi giriniz : ");
let status1 = true;
if (num < 2) {
  console.log("2 den kücük asal sayi yok");
} else if (num == 2) {
  console.log("Girdiginiz sayi en kücük asal sayidir");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      status1 = false;
      break;
    } else {
      status1 = true;
    }
  }
}

if (status1 == true) {
  console.log("Girdiginiz sayi asal sayidir");
} else {
  console.log("Girdiginiz sayi asal degildir");
}

//************************************ WHILE *********************************** */

while (true) {
  let number = +prompt("Bir sayi giriniz(0-100)");
  if (number < 0 || number > 100) {
    console.error("Yanlis bir sayi girdiniz");
  } else if (number > 0 && number < 100) {
    console.log("Tebrikler dogru sayi girdiniz!");
    break;
  }
}

//************************************ DO-WHILE *********************************** */

let not;

do {
  not = +prompt("0-100 arasinda notunuzu giriniz : ");
  alert(not);
} while (not > 100 || not < 0); //Yani bu kosul dogru oldugu sürece do devam etsin. Kosul dogru olmadiginda artik disari cik.Yani while icine true yazarsam sonsuz döngüye girer.

//? ORNEK2: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.
let not1;
do {
  not1 = prompt("Sayilari giriniz. Cikmak sitediginizde  'q' ya basiniz");
  alert(not1);
} while (not1 != "q");
