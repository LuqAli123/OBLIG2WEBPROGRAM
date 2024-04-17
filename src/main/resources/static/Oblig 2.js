function feilMelding(){
    $("#feil1").html("");
    $("#feil2").html("");
    $("#feil3").html("");
    $("#feil4").html("");
    $("#feil5").html("");
    $("#feil6").html("");
    $("#feil7").html("");
}

function kjopBillett(){

    feilMelding();
    const billett={
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        adresse : $("#adresse").val(),
        mobilnummer : $("#mobilnummer").val(),
        epost : $("#epost").val(),
    };
    $.post("/lagreKunde", billett, function (){
        hentAlt();
    });

    let valid = true;

    if (billett.film === "") {
        $("#feil1").html("Velg film");
    }
    if (billett.antall === "") {
        $("#feil2").html("Velg antall");
    }
    if (billett.fornavn === "") {
        $("#feil3").html("Fornavn feltet er påkrevet");
    }
    if (billett.etternavn === "") {
        $("#feil4").html("Etternavn feltet er påkrevet");
    }
    if (billett.adresse === "") {
        $("#feil5").html("Adresse feltet er påkrevet");
    }

    // Mobilnummer validation
    const mobilnummer = $("#mobilnummer").val();
    if (mobilnummer === "") {
        $("#feil6").text("Mobilnummer feltet er påkrevet");
        valid = false;
    } else if (valMobilnummer(mobilnummer)) {
        settFeil("feil6", "Ugyldig mobilnummer, maks 8 siffer.");
        valid = false;
    }

    // Epost validation
    const epost = $("#epost").val();
    if (epost === "") {
        $("#feil7").text("E-post feltet er påkrevet.");
        valid = false;
    } else if (valEpost(epost)) {
        settFeil("feil7", "Vennligst skriv inn en gyldig e-post.");
        console.log("1");
        valid = false;
    }

    return valid;
}

function hentAlt(){
    $.get("/hentAlt", function (data){
        hentData(data);
    });
}

function hentData(format){
    let ut = "<table class='table table-striped'>" +
        "<tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Adresse</th>" +
        "<th>Mobilnummer</th><th>Epost</th></tr>";
    for (let billett of format) {
        ut += "<tr><td>" + billett.film + "</td><td>" + billett.antall +
            "</td><td>" + billett.fornavn + "</td><td>"
            + billett.etternavn + "</td><td>" + billett.adresse + "</td><td>" + billett.mobilnummer +
            "</td><td>" + billett.epost + "</td>"
        ut += "</tr>";
    }
    ut += "</table>";
    $("#filmene").html(ut);
}

function slettBillett(){
    $.get("/slettBillett", function (){
        hentAlt();
    });
    feilMelding();
}

function settFeil(elementId, melding){
    document.getElementById(elementId).innerText = melding;
}

//Mobilnummer validering
function valMobilnummer(){
    const mobilnummer = $("#mobilnummer").val();
    let regx =/^[0-9]{8}$/;
    if (regx.test(mobilnummer)){
        $("feil6").html("");
        return false;
    }
    else {
        return true;
    }
}

//E-post validering
function valEpost(){
    const epost = $("#epost").val();
    let regx = /^[a-z A-Z0-9.-]+@[a-z]+\.[a-zA-Z]{2,}$/;
    if (regx.test(epost)){
        $("feil7").html("");
        return false;
    }
    else {
        return true;
    }
}