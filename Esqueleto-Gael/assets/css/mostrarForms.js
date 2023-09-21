
$(document).ready(function () {

    $("#entradaTicket").hide();
    $("#entradaCoordenadas").hide();
    $("#entradaCiudad").show();

    /**
     * Oculta los dos primeros elementos recibidos y muestra en 
     * pantalla el del 3er parametro
     * @param {*} ocultar1 id de un div a ocultar
     * @param {*} ocultar2 id de un div a ocultar
     * @param {*} mostrar  id de un div a mostrar
     */
    function ocultarYMostrarDiv(ocultar1, ocultar2, mostrar) {
        $(ocultar1).css("display", "none");
        $(ocultar2).css("display", "none");
        $(mostrar).fadeIn(700);
    }

    $("#btnCiudad").click(function () {
        ocultarYMostrarDiv("#entradaTicket", "#entradaCoordenadas", "#entradaCiudad");
    });

    $("#btnTicket").click(function () {
        ocultarYMostrarDiv("#entradaCoordenadas", "#entradaCiudad", "#entradaTicket")
    })

    $("#btnCoordenadas").click(function () {
        ocultarYMostrarDiv("#entradaTicket", "#entradaCiudad", "#entradaCoordenadas")
    })


    document.addEventListener('DOMContentLoaded', e => {
        $('.entradaCiudad').autocomplete();
    }, false);
});



