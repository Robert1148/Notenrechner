function notenRechnenArray() {

    let summe = 0;
    let eingabeFelder = ['sample1', 'sample2', 'sample3', 'sample4', 'sample5', 'sample6'];
    let noten = [];
    let aktuelleEingabe;
    let ergebnis;
    let anzahlNoten;
    for (let i = 0; i < eingabeFelder.length; i++) {
        aktuelleEingabe = parseInt(document.getElementById(eingabeFelder[i]).value);

        if (isNaN(aktuelleEingabe)) {
            console.log(aktuelleEingabe);
            console.log("anzahlNoten:" + anzahlNoten);
        } else {
            noten.push(aktuelleEingabe);
        }
    }
    anzahlNoten = noten.length;

    for (let i = 0; i < noten.length; i++) {
        summe = summe + noten[i];
    }

    ergebnis = summe / anzahlNoten;

    document.getElementById("durchschnitt").innerHTML = ergebnis;
    if (ergebnis < 5) {
        document.getElementById("durchschnitt").style.color = "red";
    }
    if (ergebnis >= 5) {
        document.getElementById("durchschnitt").style.color = "green";
    }
}