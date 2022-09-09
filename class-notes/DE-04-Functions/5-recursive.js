// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.
//ilk n terim toplamı

//  let toplam = 0;
// let sayi = 13 ;
//         for(int i = 1; i <= sayi; ++i)
//         {
//             toplam += i;
//         }

//         console.log("Sayıların Toplamı = " + toplam);

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplamlar(n - 1) + n;
  }
};

console.log(toplamlar(5));

//Aciklamasi ;

//toplamlar(5) + 6
//toplamlar(5) = toplamlar(4) + 5
//toplamlar(4) = toplamlar(3) + 4
//toplamlar(3) = toplamlar(2) + 3

//* ORNEK: Girilen n. terimdeki Fibonacci sayısini yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//!fibonacci dizisindeki ilk n terim toplamını bulma fonksiyonu

const fibo = (n) => {
  if (n < 2) {
    //Bunun mantigi n==1 iken 1 döndür n == 0 iken 0 döndür.Iki if yazmak yerine böyle yazdik
    return n; //Bunun sonucunda fibo(1) == 1 fibo(0) == 0 olur
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

console.log(fibo(9));
