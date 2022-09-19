const yaricapInput = document.querySelector("#yaricap");
button = document.querySelector("#btn");

button.onclick = () => {
  const r = yaricapInput.value;
  console.log(r);

  const daireAlan = (Math.PI * r * r).toFixed(2);

  const daireCevre = (2 * Math.PI * r).toFixed(2);

  document.querySelector(".alan").textContent = daireAlan;
  document.querySelector(".cevre").textContent = daireCevre;
};
