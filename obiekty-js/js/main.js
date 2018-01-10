'use strict';
class Ogloszenie {
    constructor(tytul,cena, opis){
        this.tytul =tytul;
        this.cena = cena;
        this.opis = opis;
    }
    pobierzTytul (){
        return this.tytul; 
    }
    ustawCene(nowaCena){
        this.cena = nowaCena;
        
    }
}
var ogloszenie1 = new Ogloszenie ("Rama łóżka", 500, "Dobra rama łóżka");
var tytul = ogloszenie1.pobierzTytul();
ogloszenie1.ustawCene(400)
console.log(ogloszenie1);
console.log(tytul);
var ogloszenie2 = new Ogloszenie ("Sweter", "50", "Ciepły sweter");
console.log(ogloszenie2);