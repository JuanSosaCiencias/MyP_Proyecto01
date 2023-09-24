/**
 * Codigo sacado de Boostrap, especificamente: https://getbootstrap.com/docs/5.3/forms/validation/
 * consultado el 21 de septiembre 
 */
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();


$(document).ready(
    function () {

        /**
         * Codigo sacado de: https://stackoverflow.com/questions/12010275/strip-white-spaces-on-input
         * Usuario: Kyle
         * Consultado: 22 de septiembre de 2023
         * No permite que se pongan espacios de cualquier tipo en el input que se 
         * recibió como parametro.
         * @param {*} input el input que disparó el evento
         */
        function noEspacios(input) {
            $(input).val(function (_, v) {
                return v.replace(/\s+/g, '');
            });
        }

        $("#inputCiudadOrigen").on("input", function () {
            noEspacios("#inputCiudadOrigen");
        })

        $("#inputCiudadDestino").on("input", function () {
            noEspacios("#inputCiudadDestino");
        })

        $("#inputTicket").on("input", function () {
            noEspacios("#inputTicket");
        })

    }

);






