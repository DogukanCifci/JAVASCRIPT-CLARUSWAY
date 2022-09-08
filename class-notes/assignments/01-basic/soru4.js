let number = 15;
console.log(`Girilen Sayi : ${number}`);

number = Math.floor(number);
console.log(`Girilen Sayinin tam sayi hali = ${number}`);

console.log(
  number % 2 == 0 ? "Girilen sayi cift sayidir" : "Girilen sayi tek sayidir"
);
