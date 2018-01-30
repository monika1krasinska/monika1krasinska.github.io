'use strict';
$(function () {
    $("body").append("<div>");
    $("div").attr("id", "dane-programisty");

    function pobierzDane(method, url) {
        console.log('dziala');
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                console.log(data);
                $("#dane-programisty").append("<p>" + data.imie + " " + data.nazwisko + " " + data.zawod + " " + data.firma + "</p>")
            })
    }
    var przycisk = document.getElementById("przycisk");
    przycisk.onclick = pobierzDane;
})
 $('header').text("<h2> To jest nagłówek</h2>");