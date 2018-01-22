'use strict';



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
                console.log(data);
                //pobieranie danych        

                var myObj = JSON.parse(this.responseText);

                var paragraf = document.createElement("p");
                var tekstParagrafu = document.createTextNode(myObj.userId + " , " + myObj.userName + " , " + myObj.userURL);


                paragraf.appendChild(tekstParagrafu);
                document.body.appendChild(paragraf);


                //chcąc wyswietlić jedną daną w jednym paragrafie, trzeba stworzyć trzy paragrafy

                var paragraf1 = document.createElement("p");
                var tekstParagrafu = document.createTextNode(myObj.userId);
                paragraf1.appendChild(tekstParagrafu);
                document.body.appendChild(paragraf1);


                var paragraf2 = document.createElement("p");
                var tekstParagrafu = document.createTextNode(myObj.userName);
                paragraf2.appendChild(tekstParagrafu);
                document.body.appendChild(paragraf2);

                var paragraf3 = document.createElement("p");
                var tekstParagrafu = document.createTextNode(myObj.userURL);
                paragraf3.appendChild(tekstParagrafu);
                document.body.appendChild(paragraf3);
            }

            xhttp = null;
            //zeruj obiekt, aby nie utrzymawać nie potrzebnego już połączenia z serwerem
            //"czerwona słuchawka"
        }
           xhttp.send();
    }

    function pobierzDane(method, url) {
        console.log('dziala');
        $.getJSON("https://jsonplaceholder.typicode.com/posts/1",
            function (data) {
                console.log(data);
            })

    }
    var przycisk = document.getElementsByTagName("button");
    przycisk.onclick = pobierzDane;
