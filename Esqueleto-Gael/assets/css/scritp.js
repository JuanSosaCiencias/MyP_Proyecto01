

const btnCoordenadas = document.getElementById("btnCoordenadas");


if (btnCoordenadas) {
    btnCoordenadas.addEventListener("click", () => {
        document.getElementById("textoModoSeleccion").innerHTML = "Latitud";
    });
}


const btnCiudad = document.getElementById("btnCiudad");

if (btnCiudad) {
    btnCiudad.addEventListener("click", () => {
        document.getElementById("textoModoSeleccion").innerHTML = "Ciudad de Destino";
    });
}


const btnTicket = document.getElementById("btnTicket")

if (btnTicket) {
    btnTicket.addEventListener("click", () => {
        document.getElementById("textoModoSeleccion").innerHTML = "Ticket";
    });
}




