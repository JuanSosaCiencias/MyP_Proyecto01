
$(document).ready({


    autocompletar(valores, idInput, idLista) {
        $(idLista).html(function () {

            let lista = "";

            $.each(valores, function () {
                lista += "<option>";
                lista += valores.destination;
                lista += "<opcion>";
            });

            return lista;
        });

        $(idLista + "option").on("click", function () {
            $(idInput).val(this.text());
            $(idLista).empty();
        });
    }

});

$(document).ready(function () {

    $.ajax({

        type: "get",

        url: "/autocompletador",

        data: { text: $("#inputCiudadDestino").val() },

        success: function (respuesta) {
            autocompletar(respuesta, "#inputCiudadDestino", "#listaCiudades");
        }

    });
});