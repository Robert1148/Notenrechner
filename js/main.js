let n1, n2, n3, n4, n5;
let anzahlNoten = 5;

function noteRechnen() {
    let ergebnis;
    n1 = parseInt(document.getElementById("eingabe1").value);
    n2 = parseInt(document.getElementById("eingabe1").value);
    n3 = parseInt(document.getElementById("eingabe1").value);
    n4 = parseInt(document.getElementById("eingabe1").value);
    n5 = parseInt(document.getElementById("eingabe1").value);
    n6 = parseInt(document.getElementById("eingabe1").value);
    console.log(n1 + ";" + n2 + ";" + n3 +";" +n4 + ";" + n5 + ";" + n6)
    ergebnis = summeBerechnen()/anzahlNoten;
    console.log(ergebnis);
    document.getElementById(  "durchschnitt").innerHTML = ergebnis
    if(ergebnis < 5) {
        document.getElementById("durchschnitt").style.color = "crismon";
    }
    if (ergebnis >= 5) {
        document.getElementById("durchschnitt").style.color = "red";
    }
    anzahlNoten = 6;
    return ergebnis;
}

function summeBerechnen() {
    let summe = 0;
    if(inNaN(n1)){
        console.log(summe);
        console.log("n1 ist 0");
        anzahlNoten = anzahlNoten - 1;
        console.log("anzahlNoten:" + anzahlNoten);
    }
    else{
        summe = summe + n1;
        console.log("Summe ist:" + summe);
    }
    if(inNaN(n2)){
        console.log(summe);
        console.log("n2 ist 0");
        anzahlNoten = anzahlNoten - 1;
        console.log("anzahlNoten:" + anzahlNoten);
    }
    else{
        summe = summe + n2;
        console.log("Summe ist:" + summe);
    }

    if(inNaN(n3)){
        console.log(summe);
        console.log("n3 ist 0");
        anzahlNoten = anzahlNoten - 1;
        console.log("anzahlNoten:" + anzahlNoten);
    }
    else{
        summe = summe + n3;
        console.log("Summe ist:" + summe);
    }

    if(inNaN(n4)){
        console.log(summe);
        console.log("n4 ist 0");
        anzahlNoten = anzahlNoten - 1;
        console.log("anzahlNoten:" + anzahlNoten);
    }
    else{
        summe = summe + n4;
        console.log("Summe ist:" + summe);
    }

    if(inNaN(n5)){
        console.log(summe);
        console.log("n5 ist 0");
        anzahlNoten = anzahlNoten - 1;
        console.log("anzahlNoten:" + anzahlNoten);
    }
    else{
        summe = summe + n5;
        console.log("Summe ist:" + summe);
    }

    if(inNaN(n6)){
        console.log(summe);
        console.log("n6 ist 0");
        anzahlNoten = anzahlNoten - 1;
        console.log("anzahlNoten:" + anzahlNoten);
    }
    else{
        summe = summe + n6;
        console.log("Summe ist:" + summe);
    }

}