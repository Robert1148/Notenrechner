let n1, n2, n3, n4, n5, n6;
let anzahlNoten = 6;
function notenRechner() {
    let ergebnis;
    n1 = parseInt(document.getElementById("sample1").value);
    n2 = parseInt(document.getElementById("sample2").value);
    n3 = parseInt(document.getElementById("sample3").value);
    n4 = parseInt(document.getElementById("sample4").value);
    n5 = parseInt(document.getElementById("sample5").value);
    n6 = parseInt(document.getElementById("sample6").value);
    console.log(n1 + ";" + n3 + ";" + n4 + ";" + n5 + ";" + n6)
    ergebnis = summeBerechnen()/anzahlNoten;
    console.log(ergebnis);
    document.getElementById("durchschnitt").innerHTML = ergebnis;
    if (ergebnis < 5) {
        document.getElementById("durchschnitt").style.color = "#ff00f4";
    }
    if (ergebnis > 5 && ergebnis < 10) {

        document.getElementById("durchschnitt").style.color = "orange";
    }
    if (ergebnis >= 10) {
        document.getElementById("durchschnitt").style.color = "#0022ff";
    }
    anzahlNoten = 6;
    return ergebnis;
}

function summeBerechnen() {
    let summe = 0 ;
    if (isNaN(n1)) {
        anzahlNoten = anzahlNoten - 1;
    } else {
        summe = summe + n1

    }
    if (isNaN(n2)) {
        anzahlNoten = anzahlNoten - 1;
    } else {
        summe = summe + n2

    }
    if (isNaN(n3)) {
        anzahlNoten = anzahlNoten - 1;
    } else {
        summe = summe + n3

    }
    if(isNaN(n4)) {
        anzahlNoten = anzahlNoten - 1;
    } else {
        summe = summe + n4

    }
    if (isNaN(n5)) {
        anzahlNoten = anzahlNoten - 1;
    } else {
        summe = summe + n5

    }
    if (isNaN(n6)) {
        anzahlNoten = anzahlNoten - 1;
    } else {
        summe = summe + n6

    }
    return summe;

}