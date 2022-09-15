//SORU1
const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach((i, p, diziler) => {
  diziler[p] = i * 1.1;
});

console.log(fiyatlar);

//SORU2
const newFiyatlar = fiyatlar.filter((p) => p > 90);

console.log(newFiyatlar);

//SORU3

fiyatlar
  .filter((p) => p < 110)
  .map((i) => i * 1.1)
  .forEach((a) => console.log(a));

//veya

console.log(fiyatlar.filter((a) => a < 110).map((i) => i * 1.1));

//SORU4

const maaslar = [3000, 5000, 4000, 6000, 7000];

const düsükMaas = maaslar.filter((p) => p <= 4000).map((p2) => p2 * 1.5);
console.log(düsükMaas);

//SORU5

console.log(maaslar.filter((i) => i > 4000).map((i2) => i2 * 1.25));
