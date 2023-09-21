

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

$(document).ready(function() {
    // Función para mostrar la animación cuando se hace clic en un botón de humedad
    $('.col-4').on('click', function() {
        // Agregar una clase CSS para la animación
        $(this).addClass('animate-humidity');

        // Después de un tiempo, eliminar la clase para detener la animación
        setTimeout(function() {
            $('.col-4').removeClass('animate-humidity');
        }, 1000); // Ajusta la duración de la animación en milisegundos (en este caso, 1000 ms o 1 segundo)
    });
});





