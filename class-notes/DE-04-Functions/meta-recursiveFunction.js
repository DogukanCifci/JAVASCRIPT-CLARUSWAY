let counter = 5;
function yazdir() {
  console.log("Line one");
  console.log("Line two");
  console.log("Line three");
  counter--;
  console.log(counter);

  if (counter <= 0) {
    return; // Bu sekilde sonsuz döngüye girmis olmasini engelleriz
  } else {
    return yazdir();
  }
}

yazdir();
