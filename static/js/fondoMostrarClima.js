
$(document).ready(function () {

    let linearGradient = $('#bg');

    let soleado = {
        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(219, 201, 111, 0.86), #c66e37)"
        },

        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(202, 199, 153, 0.06)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(218, 226, 6, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(206, 109, 44, 0.2)"></stop>'
    }

    let nublado = {
        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(19, 18, 18, 0.86), #8d868a)"
        },

        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(63, 63, 66, 0.06)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(34, 34, 34, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(0, 0, 0, 0.2)"></stop>'
    }


    /**
     * Cambia el color del fondo animado CSS dependiendo de los 
     * parametros recibidos
     * @param {*} fondoSVG un objeto con propiedades css
     * @param {*} etiquetasStop un string con codigo html
     */
    function cambiarFondo(fondoSVG, etiquetasStop) {
        $("svg").css(fondoSVG);
        linearGradient.html(etiquetasStop);
    }


    //pruebas
    $("#botonMagico").on("click", function (evento) {
        cambiarFondo(soleado.fondoSVG, soleado.etiquetasStop);
    });
    $("#botonMagico2").on("click", function (evento) {
        cambiarFondo(nublado.fondoSVG, nublado.etiquetasStop);
    });


});