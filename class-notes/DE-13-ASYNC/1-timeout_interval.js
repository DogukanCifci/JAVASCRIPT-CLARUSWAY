//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Senkron Programlama
//************************************** */

/* const bekle = (ms) => {
  const start = new Date().getTime();

  while (new Date().getTime() < start + ms) {} //3 saniye bos döndürdü
};
console.time("timer1");
console.log("hello"); //Hemen yazar
bekle(3000);
console.timeEnd("timer1");
console.log("Naber"); //3 saniye sonra yazar  */

//************************************** */
//************************************** */
//*Asenkron (setTimeout) 1 seferlik
//************************************** */
//************************************** */

setTimeout(() => {
  //non-blocking code---macrotask kuyruguna girer

  console.log("Selamun aleyküm");
}, 2000); //süslüden hemen sonra yazdigim, kac saniye sonra ilacagi anlamina geliyor.ms cinsinden. //Süre  burda 0 olsa bile önce console.log icindeki yazar. Cünkü bir kere buna settimeout atadik.Yani git sirada bekle dedik.Önce sirada beklemeyeceklerin bitmesi lazim.

console.log("Aleyküm selam"); //Kuyrudaga daha sonra girmesine ragmen selamun aleykümden önce yazar

setTimeout(() => {
  //non-blocking codemacrotask kuyruguna girer

  console.log("Naber napiyosun dostum");
}, 4000); //Eger sürem bir önceki setTimeOut 'un süresinden daha az olursa önce bu yazar

//*Asenkron(setInterval, clearInterval) belli araliklarla durdurulana kadar devam eder. Mesela 1 dakikada bir döviz kurunu güncellemek icin kullanilabilir

//********SETINTERVAL NONBLOCKING */

console.log("Counter Started");
let counter = 0;

const myInterval1 = setInterval(() => {
  ++counter;
  console.log(counter);
  if (counter === 5) {
    clearInterval(myInterval1); //setInterval olayini bitirmek icin clearInterval kullanilir
  }
}, 1000); //Her bir saniyede icerdeki olay gerceklessin

//********Callback Hell */
setTimeout(() => {
  console.log("ayse:s.a. ahmet");
  setTimeout(() => {
    console.log("ahmet:a.s. ayse nasılsın");
    setTimeout(() => {
      console.log("ayse:iyiyim sağol");
    }, 1000);
  }, 1000);
}, 1000);
