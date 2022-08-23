let pelaajienMaara = 0;
let noppienMaara = 0;

let tuplat = 0;

let pisteetNyt = 0;
let pelivuoro = 1;

let pelaaja1 = "Pelaaja 1";
let pelaaja2 = "Pelaaja 2";
let pelaaja3 = "Pelaaja 3";


let noppa1 = new Image();
noppa1.src = "kuvat/noppa1.png"
let noppa2 = new Image();
noppa2.src = "kuvat/noppa2.png"
let noppa3 = new Image();
noppa3.src = "kuvat/noppa3.png"
let noppa4 = new Image();
noppa4.src = "kuvat/noppa4.png"
let noppa5 = new Image();
noppa5.src = "kuvat/noppa5.png"
let noppa6 = new Image();
noppa6.src = "kuvat/noppa6.png"


function saannotEsiin() {
    let saannot = document.getElementById("saannot");
    if (saannot.style.display == "none") {
        saannot.style.display = "block";
        document.getElementById("pelaanappi2").style.display = "none";
        document.getElementById("pelaanappi3").style.display = "none";
        document.getElementById("saantonappi").innerText = "Takaisin";

    } else {
        saannot.style.display = "none";
        document.getElementById("pelaanappi2").style.display = "block";
        document.getElementById("pelaanappi3").style.display = "block";
        document.getElementById("saantonappi").innerText = "Säännöt";
    }
}

function pelaa2SetupEsiin() {
    let pelaa2 = document.getElementById("kaksiPelaajaaSetup");

    if (pelaa2.style.display == "none") {
        pelaa2.style.display = "block";
        document.getElementById("pelaanappi3").style.display = "none";
        document.getElementById("saantonappi").style.display = "none";
        document.getElementById("pelaanappi2").innerHTML = "Takaisin";
    } else {
        pelaa2.style.display = "none";
        document.getElementById("pelaanappi3").style.display = "block";
        document.getElementById("saantonappi").style.display = "block";
        document.getElementById("pelaanappi2").innerHTML = "2 Pelaajaa";
    }
}

function pelaa3SetupEsiin() {
    let pelaa3 = document.getElementById("kolmePelaajaaSetup");

    if (pelaa3.style.display == "none") {
        pelaa3.style.display = "block";
        document.getElementById("pelaanappi2").style.display = "none";
        document.getElementById("saantonappi").style.display = "none";
        document.getElementById("pelaanappi3").innerHTML = "Takaisin";
    } else {
        pelaa3.style.display = "none";
        document.getElementById("pelaanappi2").style.display = "block";
        document.getElementById("saantonappi").style.display = "block";
        document.getElementById("pelaanappi3").innerHTML = "3 Pelaajaa";
    }
}



function yksiNoppa() {
    noppienMaara = 1;
}

function kaksiNoppaa() {
    noppienMaara = 2;
}

function kaksiPelaajaa() {
    if (document.getElementById("pelaaja1nimi2").value.trim().length == 0) {
        pelaaja1 = "Pelaaja 1";
    } else {
        pelaaja1 = document.getElementById("pelaaja1nimi2").value;
    }

    if (document.getElementById("pelaaja2nimi2").value.trim().length == 0) {
        pelaaja2 = "Pelaaja 2";
    } else {
        pelaaja2 = document.getElementById("pelaaja2nimi2").value;
    }

    pelaajienMaara = 2;
}

function kolmePelaajaa() {
    if (document.getElementById("pelaaja1nimi3").value.trim().length == 0) {
        pelaaja1 = "Pelaaja 1";
    } else {
        pelaaja1 = document.getElementById("pelaaja1nimi3").value;
    }

    if (document.getElementById("pelaaja2nimi3").value.trim().length == 0) {
        pelaaja2 = "Pelaaja 2";
    } else {
        pelaaja2 = document.getElementById("pelaaja2nimi3").value;
    }

    if (document.getElementById("pelaaja3nimi3").value.trim().length == 0) {
        pelaaja3 = "Pelaaja 3";
    } else {
        pelaaja3 = document.getElementById("pelaaja3nimi3").value;
    }

    pelaajienMaara = 3;
}


function pelaa() {
    document.getElementById("valikko").style.display = "none";
    document.getElementById("")

}
