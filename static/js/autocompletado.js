<<<<<<< HEAD
/*
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
}); */


$(document).ready(function () {

    $("#ciudadInputOrigen").on("input", function (e) {
        $("#listaCiudades").empty();
        $.ajax({
            method: "post",
            url: "/autocompletador",
            data: { text: $("#ciudadInputOrigen").val() },
            success: function (res) {

                $("#listaCiudades").html(function () {

                    let lista = "";
        
                    $.each(valores, function () {
                        lista += "<option>";
                        lista += valores.destination;
                        lista += "<opcion>";
                    });
        
                    return lista;
                });
  
                $("#listaCiudades li").click(function () {
                    var selectedValue = $(this).text();
                    $("#ciudadInputOrigen").val(selectedValue);
                    $("#listaCiudades").empty();
                });
            },
        });
    });
  });
  
  $(document).ready(function () {
      $("#ciudad_origen").on("input", function (e) {
          $("#lista_origen").empty();
          $.ajax({
              method: "post",
              url: "/autocompletadorOrigen",
              data: { text: $("#ciudad_origen").val() },
              success: function (res) {
                  var uniqueValues = new Set();
                  $.each(res, function (index, value) {
                      uniqueValues.add(value.origin);
                  });
                  var data = "<ul>";
                  uniqueValues.forEach(function (value) {
                      data += "<li>" + value + "</li>";
                  });
                  data += "</ul>";
                  $("#lista_origen").html(data);
  
                  $("#lista_origen li").click(function () {
                      var selectedValue = $(this).text();
                      $("#ciudad_origen").val(selectedValue);
                      $("#lista_origen").empty();
                  });
              },
          });
      });
  });
  
  $(document).ready(function () {
      $("#ciudad_destino").on("input", function (e) {
          $("#lista_destino").empty();
          $.ajax({
              method: "post",
              url: "/autocompletadorDestino",
              data: { text: $("#ciudad_destino").val() },
              success: function (res) {
                  var uniqueValues = new Set();
                  $.each(res, function (index, value) {
                      uniqueValues.add(value.destination);
                  });
                  var data = "<ul>";
                  uniqueValues.forEach(function (value) {
                      data += "<li>" + value + "</li>";
                  });
                  data += "</ul>";
                  $("#lista_destino").html(data);
  
                  $("#lista_destino li").click(function () {
                      var selectedValue = $(this).text();
                      $("#ciudad_destino").val(selectedValue);
                      $("#lista_destino").empty();
                  });
              },
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
=======
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

>>>>>>> back-end
