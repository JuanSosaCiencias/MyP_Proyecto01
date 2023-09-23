
$(document).ready(function () {



    /**
     * Implementacion de pluggin para el autocompletado en boostrap
     * Extraido de: https://www.jqueryscript.net/form/smart-autocomplete-bootstrap.html
     * consultado el: 22 de septiembre 
    */


    $("#ciudadInputOrigen").on("input", function (e) {
        $.ajax({
            method: "post",
            url: "/autocompletadorOrigen",
            data: { text: $("#ciudadInputOrigen").val() },
            success: function (res) {

                let ciudades = [];

                $.each(res, function (i, value) {
                    ciudades.push(value.origin);
                })

                $("#inputCiudadOrigen").autofill({
                    values: ciudades,
                    itemLimit: 3,
                    darkMode: true,
                    minCharacters: 1
                });
            }
        });
    });


    $("#ciudadInputDestino").on("input", function (e) {
        $.ajax({
            method: "post",
            url: "/autocompletadorDestino",
            data: { text: $("#ciudadInputDestino").val() },
            success: function (res) {

                let ciudades = [];

                $.each(res, function (i, value) {
                    ciudades.push(value.origin);
                })

                $("#inputCiudadDestino").autofill({
                    values: ciudades,
                    itemLimit: 8,
                    darkMode: true,
                    minCharacters: 1
                });
            }
        });
    });

});


function mostrarMensajeError() {
    var mensajeError = document.getElementById("mensaje-error");
    mensajeError.style.display = "block";

    setTimeout(function () {
        mensajeError.style.display = "none";
    }, 2000);
}

window.onload = mostrarMensajeError;