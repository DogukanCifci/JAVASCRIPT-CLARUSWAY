//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//*Example1 (butonlara still vericem)

const button = document.getElementById("btn");

button.style.color = "yellowgreen";
button.style.backgroundColor = "black";
button.style.width = "200px";
button.style.height = "100px";
button.style.fontSize = "1.3rem";

button.textContent = "TIKLA";
button.innerHTML = "TIKLA"; //Farkini slaytta yazdim. textContentin yaptigi her seyi innerHTML de yapar.Ama innerHTML'de span p gibi tag de ekstra ekleyebiliriz.

//*Example2 (paragraf style)

const paragrafStyle = document.getElementById("par1").style; //style burda yazdigim icin altta paragraftan sonra tekrar yazmama gerek kalmaz.

paragrafStyle.backgroundColor = "darkgray";
paragrafStyle.color = "orange";
paragrafStyle.fontSize = "1.5rem";
paragrafStyle.padding = "15px";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz
//*================================================

const resim = document.getElementsByTagName("img");
console.log(resim); //Indislemede istedigim resmin kacinci indiste oldugunu görmek icin consoledan bakabiliriz.

resim[0].style.width = "300px";
resim[1].style.border = "5px solid red";

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const basliklar = document.getElementsByClassName("H1");
console.log(basliklar); //Birden fazla H1 classina sahip eleman oldugu icin yine dizi seklinde bize döndürür.

basliklar[0].style.color = "purple";
basliklar[0].style.textAlign = "center";

//Hepsine ayni anda etkilemek istersem for döngüsü kullanmak zorundayim:

for (let i = 0; i < basliklar.length; i++) {
  basliklar[i].style.color = "blue";
  basliklar[i].style.textAlign = "left";
}

basliklar[0].innerHTML =
  "<a href='https://www.clarusway.com'>DOM COK KOLAYDIR</a>"; //Bu sekilde tag ekliyoruz.

//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

const title = document.querySelector("title");

title.textContent = "DOM Manipulation";

document.querySelector("#body").style.backgroundImage =
  "linear-gradient(green, pink)";

const H2 = document.querySelector(".H2");

H2.style.color = "pink";

const allP = document.querySelectorAll("p");

console.log(allP);

allP[1].style.fontSize = "3rem";

// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. Endeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği vardır.

//!(örnek üstlerde baslik kısmında var) HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

//*  https://softauthor.com/javascript-htmlcollection-vs-nodelist/
