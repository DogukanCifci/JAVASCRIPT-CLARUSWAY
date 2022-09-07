const not = 91;

if (not < 0) {
  console.log("Bunu nasil basardin!");
} else if (not >= 0 && not <= 25) {
  console.log(`NOTUNUZ ${not}: FF `);
} else if (not > 25 && not <= 45) {
  console.log(`NOTUNUZ ${not} : DD`);
} else if (not > 45 && not <= 65) {
  console.log(`NOTUNUZ ${not} : CC`);
} else if (not > 66 && not <= 75) {
  console.log("NOTUNUZ : BB");
} else if (not > 75 && not <= 90) {
  console.log(`NOTUNUZ ${not} : BA`);
} else {
  console.log(`NOTUNUZ ${not} : AA`);
}
