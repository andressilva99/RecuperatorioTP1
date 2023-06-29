let montoFinal = 0;
let gananciaFinal = 0;
let cont = 1;
let porcentaje = 0;
let total = 0;
let monto = document.getElementById('monto');
let dias = document.getElementById('dias');
let apellido = document.getElementById('apellido');
let nombre = document.getElementById('nombre');

function validarImputs() {
    if (nombre.value.trim() === "") {
        document.getElementById("nombreIncorrecto").style.display = "block";
        return;
    } else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (apellido.value === "") {
        document.getElementById("apellidoIncorrecto").style.display = "block";
        return;
    } else {
        document.getElementById("apellidoIncorrecto").style.display = "none";
    }
    monto.value = parseFloat(monto.value);
    if (isNaN(monto.value)) {
        document.getElementById("montoIncorrecto").style.display = "block";
    } else {
        document.getElementById("montoIncorrecto").style.display = "none";
    }
    if (monto.value < 1000) {
        document.getElementById("montoIncorrecto").style.display = "block";
    }
    if (monto.value > 1000) {
        document.getElementById("montoIncorrecto").style.display = "none";
    }

}

function validarDias() {
    if (dias.value >= 30 && dias.value <= 60) {
        porcentaje = 40;
        return porcentaje;
    } else if (dias.value > 61 && dias.value <= 120) {
        porcentaje = 45;
        return porcentaje;
    } else if (dias.value >= 121 && dias.value < 360) {
        porcentaje = 50;
        return porcentaje;
    } else if (dias.value >= 360) {
        porcentaje = 65;
        return porcentaje;
    }
}

function calcularMostrarMonto() {
    total = monto.value = parseFloat(monto.value);
    montoFinal = total + total * dias.value / 360 * porcentaje / 100;
    let texto = `<h2>Periodo N°1, Monto Inicial: ${monto.value} Monto final: ${montoFinal.toFixed(2)}</h2> `;
    document.getElementById('cuadro').innerHTML = texto;
}

function invertir() {
    validarImputs();
    validarDias();
    calcularMostrarMonto();
}

function reinvertir() {
    validarImputs();
    validarDias();
    cont++;
    gananciaFinal = montoFinal + montoFinal * dias.value / 360 * porcentaje / 100;
    let texto = `
                <h2>Periodo N° ${cont}, Monto Inicial: ${total.toFixed(2)} Monto final: ${gananciaFinal.toFixed(2)}</h2>          
    `;
    document.getElementById('cuadro').innerHTML = texto;
    montoFinal = gananciaFinal
}