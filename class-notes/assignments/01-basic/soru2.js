let ay = prompt("Bir ay giriniz : ");
ay = ay.toUpperCase();
console.log(ay);

switch (ay) {
  case "OCAK":
    console.log(1);
    break;
  case "SUBAT":
    console.log(2);
    break;
  case "MART":
    console.log(3);
    break;
  case "NISAN":
    console.log(4);
    break;
  case "MAYIS":
    console.log(5);
    break;
  case "HAZIRAN":
    console.log(6);
    break;
  case "TEMMUZ":
    console.log(7);
    break;
  case "AGUSTOS":
    console.log(8);
    break;
  case "EYLUL":
    console.log(9);
    break;
  case "EKIM":
    console.log(10);
    break;
  case "KASIM":
    console.log(111);
    break;
  case "ARALIK":
    console.log(12);
    break;
  default:
    console.log("hatali bir giris yaptiniz");
    break;
}
