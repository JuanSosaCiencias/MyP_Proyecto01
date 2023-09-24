const ciudad_boton = document.querySelector("#ciudad-boton");
const inicio_boton = document.querySelector("#inicio-boton");
const ciudad_btn = document.querySelector("#ciudad-btn");
const ticket_boton = document.querySelector("#ticket-boton");
const lat_long_boton = document.querySelector("#lat_long-boton");
const ciudad_form = document.querySelector("#ciudad-form");
const ticket_form = document.querySelector("#ticket-form");
const coordenadas_form = document.querySelector("#coordenadas-form");
const contenedor = document.querySelector(".contenedor");


ticket_boton.addEventListener("click", () => {
    
    contenedor.classList.add("sign-up-mode");
    inicio_boton.style.display = "none";
    
});

ciudad_boton.addEventListener("click", () => {
    contenedor.classList.remove("sign-up-mode");
    inicio_boton.style.display = "flex";

});

ciudad_btn.addEventListener("click", () => {
    ciudad_form.style.display = "block";
    coordenadas_form.style.display = "none";
});

lat_long_boton.addEventListener("click", () => {
    ciudad_form.style.display = "none";
    coordenadas_form.style.display = "block";
});


$(document).ready(function () {
  $("#sugeridos").on("input", function (e) {
      $("#lista_sugeridos").empty();
      $.ajax({
          method: "post",
          url: "/autocompletador",
          data: { text: $("#sugeridos").val() },
          success: function (res) {
              var data = "<ul>";
              $.each(res, function (index, value) {
                  data += "<li>" + value.num_ticket + "</li>";
              });
              data += "</ul>";
              $("#lista_sugeridos").html(data);

              $("#lista_sugeridos li").click(function () {
                  var selectedValue = $(this).text();
                  $("#sugeridos").val(selectedValue);
                  $("#lista_sugeridos").empty();
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
                    uniqueValues.add(value.iata);
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
                    uniqueValues.add(value.iata);
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


$("#ciudad_origen").on("input", function (e) {
    var valor = $(this).val();
    valor = valor.replace(/\s/g, '');
    $(this).val(valor);
});

$("#ciudad_destino").on("input", function (e) {
    var valor = $(this).val();
    valor = valor.replace(/\s/g, '');
    $(this).val(valor);
});

    function mostrarMensajeError() {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.style.display = "block";

        setTimeout(function () {
            mensajeError.style.display = "none";
        }, 2000);
    }
    
    window.onload = mostrarMensajeError;








