// coded by Mohammad Zefri
// contact me on mdzefri.code@gmail.com

let disInput = document.getElementById("dis");
let poidsInput = document.getElementById("poids");
let expressInput = document.getElementById("express");
let coutInput = document.getElementById("cout");

let coutTotal = 0;
function calculerFn() {
    if (disInput.value !== "" && poidsInput.value !== "") {
        if (poidsInput.value < 10) {
            coutTotal = disInput.value * 0.5;
        } else if (poidsInput.value > 10) {
            coutTotal = disInput.value * ( poidsInput.value / 10 ) * 0.3;
        };

        if(expressInput.checked) {
            coutTotal += ( coutTotal * 20 ) / 100;
        };

        coutInput.value = coutTotal.toFixed(2);

    };
};

function effacerFn() {
    disInput.value = ``;
    poidsInput.value = ``;
    coutInput.value = ``;
};