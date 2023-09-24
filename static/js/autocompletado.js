let inputCiudadOrigen = "#inputCiudadOrigen"
let inputCiudadDestino = "#inputCiudadDestino"

let listaCiudadesOrigen = "#listaOrigen"
let listaCiudadesDestino = "#listaDestino"



$(document).ready(function () {

    $(inputCiudadOrigen).on("input", function () {
        $.ajax({
            type: "POST",
            url: "/autocompletadorOrigen",
            data: { text: $(inputCiudadOrigen).val() },
            dataType: "json",
            success: function (res) {

                let data = "";

                $.each(res, function (i, valor) {
                    data += "<p class='mb-0'>" + valor + "</p>"
                });

                $(listaCiudadesOrigen).html(data);

                $(listaCiudadesOrigen + " p").click(function () {
                    var selectedValue = $(this).text();
                    $(inputCiudadOrigen).val(selectedValue);
                    $(listaCiudadesOrigen).empty();
                    $(listaCiudadesOrigen).hide();
                });

            }
        });
    });

    $(inputCiudadDestino).on("input", function () {
        $.ajax({
            type: "POST",
            url: "/autocompletadorDestino",
            data: { text: $(inputCiudadDestino).val() },
            dataType: "json",
            success: function (res) {

                let data = "";

                $.each(res, function (i, valor) {
                    data += "<p class='mb-0'>" + valor + "</p>"
                });

                let valor = $(inputCiudadDestino).val();

                console.log(valor)
                console.log("jajdlajs")


                $(listaCiudadesOrigen).html(data);

                console.log($(inputCiudadDestino).val())

                $(listaCiudadesDestino + " p").click(function () {
                    let selectedValue = $(this).text();
                    $(inputCiudadDestino).val(selectedValue);
                    $(listaCiudadesDestino).empty();
                    $(listaCiudadesDestino).hide();
                });

            }
        });
    })

});

