'use strict';
$(function () {
    function pobierzDane(method, url) {
        console.log('dziala');
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                console.log(data);
                $("body").append("<div>");
                $("div").attr("id", "dane-programisty");
                $("#dane-programisty").append("<p>" + data.imie + " " + data.nazwisko + " " + data.zawod + " " + data.firma + "</p>")
            })
    }
    var przycisk = document.getElementById("przycisk");
    przycisk.onclick = pobierzDane;
})


