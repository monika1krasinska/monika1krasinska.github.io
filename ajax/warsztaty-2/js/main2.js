 'use strict';
 $(function () {


     $('button').click(function () {
         $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
             function (pobierzDane) {
                 //             console.log(pobierzDane);
                 $("body").add("p").append(pobierzDane.userId);

                 $("body").add("p").append(pobierzDane.userName);

                 $("body").add("p").append(pobierzDane.userURL);

             })
     })
 });