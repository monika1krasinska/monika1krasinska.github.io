'use strict';
var paragraf1 = document.getElementById("p1");
var paragraf2 = document.getElementById("p2");
var przycisk = document.getElementById("przycisk")

function ustawTlo(){
    paragraf1.style.backgroundColor = "red";
    paragraf2.style.backgroundColor = "yellow";
}
przycisk.onclick =ustawTlo;