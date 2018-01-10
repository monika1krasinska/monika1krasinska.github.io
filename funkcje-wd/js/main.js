'use strict';
//Stwórz funkcję , która będzie przyjmować dwa parametry - dystans podróży w km oraz prędkość podróży w km/h. Funkcja ma policzyć i zwrócić czas naszej podróży. 
//Wynik wyświetl w konsoli w postaci "Dystans pokonasz w 4h"
//t=s/V 
function formatujCzas (czasPrzejazdu) {
    var sformatowanyCzas; 
    var godziny = Math.floor(czasPrzejazdu);
    var minuty = (czasPrzejazdu - godziny) * 60 ;
    minuty = Math.floor (minuty);
    sformatowanyCzas = godziny + " h " + minuty + " min.";
    return sformatowanyCzas;
}

//tylko pierwszy return działą

function czasPodrozy (s,V) {
    if (V <= 0) {
        alert ( "Błąd! Prędkość nie może być mniejsza lub równa 0")
    }
    var czas = s / V;
    console.log("Jestem tutaj")
    return czas;
}
var czasPrzejazdu = czasPodrozy (200,10);
console.log ("Dystans pokonasz w " + formatujCzas(czasPrzejazdu));

//var czasPrzejazdu2 = czasPodrozy (300,50);
//console.log("Dystans pokonasz w " + czasPrzejazdu2 + "h");
//var czasPrzejazdu3 = czasPodrozy (500,20);
//console.log("Dystans pokonasz w " + czasPrzejazdu3 + "h");
