var wszystkieZgody = document.getElementById("wszystkie-zgody");
var checkboxy = document.querySelectorAll('input[type=checkbox]');
//console.log(checkboxy);
//console.log(wszystkieZgody);
//var dwaCheckboxy = document.getElementsByClassName(.checkbox-required)

var zgoda1 = document.getElementById("zgoda-marketingowa-1");
var zgoda2 = document.getElementById("zgoda-marketingowa-2")

function checkboxState() {
    'use strict';
    if (this.checked) {
        zgoda1.checked = true;
        zgoda2.checked = true;
        //        console.log("zaznaczony");
    } else {
        zgoda1.checked = false;
        zgoda2.checked = false;
        //        console.log("niezaznaczony");
    }
};
wszystkieZgody.addEventListener("change", checkboxState);
var imieNazwisko = document.getElementById("name");
var email = document.getElementById("email");
var formularz = document.getElementById("formularz")
console.log(formularz);

function sprawdzPola(e) {
 e.preventDefault();
    if (imieNazwisko.value == "") {
        console.log("puste pole!!!")

    } else {
        console.log("ok!")
    }
}
formularz.addEventListener("submit", sprawdzPola())