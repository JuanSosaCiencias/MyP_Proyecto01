
$(document).ready(function () {

    $("#entradaTicket").hide();
    $("#entradaCiudad").show();

    /**
     * Oculta el elemento correspondiente al primer parametro
     * recibidos y muestra en pantalla el elemento correspondiente
     * al 2do elemento
     * @param {*} ocultar1 id de un div a ocultar
     * @param {*} mostrar  id de un div a mostrar
     */
    function ocultarYMostrarDiv(ocultar, mostrar) {
        $(ocultar).css("display", "none");
        $(mostrar).fadeIn(700);
    }

    $("#btnCiudad").click(function () {
        ocultarYMostrarDiv("#entradaTicket", "#entradaCiudad");
    });

    $("#btnTicket").click(function () {
        ocultarYMostrarDiv("#entradaCiudad", "#entradaTicket")
    })


    document.addEventListener('DOMContentLoaded', e => {
        $('.entradaCiudad').autocomplete();
    }, false);
});



