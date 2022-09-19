//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
//! alttaki kod index.html de, görmek için buraya da yazdık
//  <h1 class="header" onmouseover="style.color='black'" onmouseout="style.color='blue'">DOM Temelleri</h1>

//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
//*  <h1 class="H1" onmouseover=black() onmouseout=blue()>DOM Basics
//</h1>   HTML bu sayfaya script tag ini yazmamız lazım

//JAVASCRİPT
const header = document.querySelector(".H3");
const blue = () => (header.style.color = "blue");
const black = () => (header.style.color = "black");

//? METHOD-3 (SADECE JAVASCRIPT ILE YAZILAN KOD)
//* ======================================================
document.querySelector(".H2").onmouseover = () => {
  document.querySelector("#body").style.backgroundColor = "blue";
};

const baslik = document.querySelector("#h2-merhaba");

baslik.onmouseover = () => {
  baslik.style.fontSize = "32px";
  baslik.style.color = "red";
};

//2)onclick-- ondblclick

const birinci = document.querySelector(".bir");
const ikinci = document.querySelector(".iki");

birinci.onclick = () => {
  birinci.src = "./img 4/logo2.png";
  ikinci.src = "./img 4/js_logo.png";
};

birinci.ondblclick = () => {
  birinci.src = "./img 4/dom-olaylar.png";
  ikinci.src = "./img 4/logo2.png";
};

//* ************** *********************     ***  (button onclick)
const button = document.querySelector("#btn");

button.onclick = () => {
  document.querySelector("#body").style.backgroundImage =
    "linear-gradient(to right,blue,red)";
  button.textContent = "SEARCH";
  button.style.fontSize = "30px";
  header.style.backgroundColor = "white";
};

//*onclick onmouseover a göre daha baskin

// ? METHOD-4 (ONLY JAVASCRIPT - addEventListener())
// ?---------------------------------------------------------------

button.addEventListener("click", () => {
  document.querySelector("#body").style.backgroundImage =
    "linear-gradient(to right,blue,red)";
  button.textContent = "SEARCH";
  button.style.fontSize = "30px";
  header.style.backgroundColor = "white";
});
