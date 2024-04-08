function leggTilBillett(){
    if (document.getElementById("film").value === ""){

    }

    if (document.getElementById("filmerror").innerHTML !== "" ||
        document.getElementById("feilepost").innerHTML !== "" ||
        document.getElementById("feiltelefon").innerHTML !== "" ||
        document.getElementById("feilNavn").innerHTML !== "" ||
        document.getElementById("feilantall").innerHTML !== "" ||
        document.getElementById("feiletternavn").innerHTML !== ""){
        return;
    }
    let eksisterendeBilletter = billetter.length; // Lagrer antall billetter allerede skrevet ut
    //Oppretter et billett objekt fra input
    const billett = {
        film: document.getElementById("film").value,
        antall: document.getElementById("antall").value,
        navn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefon: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };
    //Legger til billett objektet i billetter arrayet
    billetter.push(billett);
    for (let i = eksisterendeBilletter; i < billetter.length; i++) {
        let nyttAvsnitt = document.createElement("p");
        nyttAvsnitt.textContent = "Film: " + billetter[i].film + ", antall: " + billetter[i].antall + ", navn: " + billetter[i].navn + " " + billetter[i].etternavn + ", telefonnummer: " + billetter[i].telefon + ", epost: " + billetter[i].epost;
        document.getElementById("billetter").appendChild(nyttAvsnitt);
        document.getElementById("billetter").appendChild(document.createElement("br"));
    }
    //resetter input feltene etter at billetter er kjøpt.
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
    // setter opp melding hvis bruker prøver å kjøpe billetter med et tomt felt
    if (document.getElementById("fornavn").value === ""){
        document.getElementById("feilNavn").innerText = "Må skrive inn fornavn"
    }

    if (document.getElementById("etternavn").value === ""){
        document.getElementById("feiletternavn").innerText = "Må skrive inn etternavn"
    }

    if (document.getElementById("epost").value === ""){
        document.getElementById("feilepost").innerText = "Må  skrive inn riktig epost"
    }

    if(document.getElementById("telefonnr").value === ""){
        document.getElementById("feiltelefon").innerText = "Må skrive inn telefon"
    }

    if (document.getElementById("antall").value === ""){
        document.getElementById("feilantall").innerText = "Må skrive inn antall"
    }
}
//funksjon som valider telefonnummeret
function validerTelefon(telefon){
    let regex = /^[0-9]{8}$/;
    if (regex.test(telefon)){
        return true;
    }
}
//funksjon som validerer epost addressen
function validerEpost(epost){
    let regex = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/
    if (regex.test(epost)){
        return true;
    }
}
//funksjon som sletter billetten
function slettBillett(){
    while(billetter.length !==0){
        billetter.pop();
    }
    document.getElementById("billetter").innerHTML = "";
}