//'use strict';

//var a = 5;
//var b = 7;
//var suma = a + b;
//console.log(suma);
//a = 25;
//b= 137;
//suma = a +b;
//console.log(suma);
// 
//a = 101;
//b = 217;
//suma = a+b;
//console.log(suma);
 
//function dodawanie () {
    'use strict';
//    return 108
//}
//var wynik = dodawanie()
//console.log(wynik)

//var wynik = 0;
//function dodawanie (a,b) {
//    var suma = a + b ;
//    return=suma;
//    
//}
//wynik = dodawanie (1,3);
//console.log(wynik);


function dodawanie(arr) {
    var suma = 0;
    for (var i=0; i<arr.length; ++i) {
    suma = suma + arr[i];
    }
    return suma;
}
var tablica = [5 ,35 , 67, 86 ,93 ,76 ,37 ,53 ,78 ,45];
var wynik = dodawanie(tablica);
console.log(wynik);
