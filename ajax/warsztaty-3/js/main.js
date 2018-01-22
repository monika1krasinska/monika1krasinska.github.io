    'use strict';

    function ajax(method, url) {
        'use strict';
        //    definicja funkcji ajax
        var xhttp = new XMLHttpRequest();
        //console.log(xhttp);

        xhttp.open(method, url);
        //    otwieramy  połączenie

        xhttp.onreadystatechange = function () {
            //funkcja wykona sie dopiero kiedy zmieni sie status    

            if (xhttp.readyState == 4) {
                //gdy stany są pobrane i gotowe do użycia
                //   4 = dokument został w pełni przesłany i jest gotowy do użycia
                if (xhttp.status == 200) {
                    var data = xhttp.responseText;
                    //                    console.log(data);
                    //pobieranie danych        

                    var myObj = JSON.parse(this.responseText);

                    myObj.forEach(function (element, index) {
                        
                        var paragraf = document.createElement("p");
                        var tekstParagrafu = document.createTextNode(element.id + ", "+element.name + ", "+ element.username + ", " + element.email + ", "+ element.address);
                        
                        paragraf.appendChild(tekstParagrafu);
                        document.body.appendChild(paragraf);
                        
                        
                    });

                }

                xhttp = null;
            }

        }
        xhttp.send();
    }
    function obslugaScrolla() {
        var d = document.documentElement;
        var wysokoscHtml = d.offsetHeight;
        var scrollTop = Math.ceil(d.scrollTop);
        var wysokoscWew = window.innerHeight;
        //        console.log("Scroll Top" + d.scrollTop);
        if (wysokoscHtml == scrollTop + wysokoscWew) {
            console.log("jestem na dole");
            ajax("GET", "https://jsonplaceholder.typicode.com/users");
        }
    }
    window.onscroll = obslugaScrolla;
