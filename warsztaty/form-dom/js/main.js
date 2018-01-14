 'use strict';
var formularz = document.getElementById("formularz")
var imie = document.getElementById("imie");
var imie1 = imie.value;
//console.log(imie.value);
var nazwisko = document.getElementById("nazwisko");
//console.log(nazwisko.value)
function pobierzImie(event){
    event.preventDefault();
    console.log(imie.value);
    console.log(nazwisko.value);
}
//formularz.onsubmit=pobierzImie();
//nawiasy powodują automatyczne wywołanie funkcji