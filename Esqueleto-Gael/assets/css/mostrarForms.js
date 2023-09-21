
$(document).ready($("#entradaCiudad").fadeIn(0))

$(document).ready(function () {
    $("#btnCiudad").on("click", function () {
        $("#entradaCoordenadas").css("display", "none");
        $("#entradaTicket").css("display", "none");

        $("#entradaCiudad").fadeIn(700);
    }).change();
})

$(document).ready(function () {
    $("#btnTicket").on("click", function () {
        $("#entradaCoordenadas").css("display", "none");
        $("#entradaCiudad").css("display", "none");

        $("#entradaTicket").fadeIn(700);
    }).change();
})


$(document).ready(function () {
    $("#btnCoordenadas").on("click", function () {
        $("#entradaCiudad").css("display", "none");
        $("#entradaTicket").css("display", "none");

        $("#entradaCoordenadas").fadeIn(700);
    }).change();
})







