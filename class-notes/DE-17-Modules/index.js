console.log("index.js is running");

//Ayni sekilde export ettigimiz gibi burada import ediyoruz.
import karesi, {
  WHW as W,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from "./mymodule.js";

import ugurla, { selam } from "./module2.js";

//module2.js te güle güle yazani default olarak gönderdigimiz icin bir ismi yoktu. Ismi burada biz kendimiz vermis olduk
console.log(selam);
console.log(ugurla);

console.log("W :>>", W);
console.log("WORKING_HOURS_WEKK :>>", WORKING_HOURS_WEEK);

console.log("counter :>>", counter);

inc(4);
dec(6);
dec();
console.log("dec():>>", dec());

inc();

console.log("counter :>>", counter);

// counter = 28; Bu sekilde degisiklik yapamam hata verir. Fonksiyonu cagirabilirim ve sadece o sekilde degisiklik yapilabilir kendi icerigiyle.
