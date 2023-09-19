const sign_in_btn = document.querySelector("#ciudad-boton");
const sign_up_btn = document.querySelector("#ticket-boton");
const contenedor = document.querySelector(".contenedor");


sign_up_btn.addEventListener("click", () => {
  contenedor.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  contenedor.classList.remove("sign-up-mode");
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
  $("#origen").on("input", function (e) {
      $("#lista_origen").empty();
      $.ajax({
          method: "post",
          url: "/autocompletadorOrigen",
          data: { text: $("#origen").val() },
          success: function (res) {
              var data = "<ul>";
              $.each(res, function (index, value) {
                  data += "<li>" + value.origin + "</li>";
              });
              data += "</ul>";
              $("#lista_origen").html(data);

              $("#lista_origen li").click(function () {
                  var selectedValue = $(this).text();
                  $("#origen").val(selectedValue);
                  $("#lista_origen").empty();
              });
          },
      });
  });
});

$(document).ready(function () {
  $("#destino").on("input", function (e) {
      $("#lista_destino").empty();
      $.ajax({
          method: "post",
          url: "/autocompletadorDestino",
          data: { text: $("#destino").val() },
          success: function (res) {
              var data = "<ul>";
              $.each(res, function (index, value) {
                  data += "<li>" + value.destination + "</li>";
              });
              data += "</ul>";
              $("#lista_destino").html(data);

              $("#lista_destino li").click(function () {
                  var selectedValue = $(this).text();
                  $("#destino").val(selectedValue);
                  $("#lista_destino").empty();
              });
          },
      });
  });
});






