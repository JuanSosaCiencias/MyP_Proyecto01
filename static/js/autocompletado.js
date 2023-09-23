
$(document).ready(function () {

    let lista = ["aty", "alc", "admx", "aas", "datos", "puestos", "al", "ajdfl"];

    /**
     * Implementacion de pluggin para el autocompletado en boostrap
     * Extraido de: https://www.jqueryscript.net/form/smart-autocomplete-bootstrap.html
     */
    $("#inputCiudadOrigen").autofill({
        values: lista,
        itemLimit: 4,
        darkMode: true,
        minCharacters: 1
    });


    $("#ciudadInputOrigen").on("input", function (e) {
        $.ajax({
            method: "post",
            url: "/autocompletadorOrigen",
            data: { text: $("#ciudadInputOrigen").val() },
            success: function (res) {

                $("#inputCiudadOrigen").autofill({
                    values: lista,
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

                $("#inputCiudadDestino").autofill({
                    values: lista,
                    itemLimit: 3,
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