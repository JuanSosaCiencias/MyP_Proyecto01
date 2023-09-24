
const imagenClimaOrigen = "#imgClimaOrigen"
const imagenClimaDestino = "#imgClimaDestino"

const imgSoleado = "../static/img/soleado.png";
const imgAlgoSoleado = "../static/img/algoSoleado.png";
const imgUnaNube = "../static/img/unaNube.png";
const imgNublado = "../static/img/nublado.png";
const imgLluvia = "../static/img/lluvia.png";
const imgTormenta = "../static/img/tormenta.png";
const imgNevado = "../static/img/nevado.png";
const imgNiebla = "../static/img/niebla.png";

const imgDefault = "../static/img/climaPrincipal.png";

const imgOrigen = "#imgClimaOrigen";

const imgDestino = "#imgClimaDestino";


$(document).ready(function () {

    const linearGradient = $('#bg');

    const soleado = {

        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(219, 201, 111, 0.86), #c66e37)"
        },
        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(202, 199, 153, 0.06)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(218, 226, 6, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(206, 109, 44, 0.2)"></stop>',
        estilosBody: {
            "color": "white",
            "background-image": "linear-gradient(to bottom, rgba(219, 201, 111, 0.86), #c66e37)"
        },
        fondoTexto: {
            "background-color": "rgb(227, 135, 13)"
        },
        colorTextoBoton: {
            "color": "white",
        },

    }

    const unaNube = {

        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(113, 201, 212, 0.86), #d2d6d6)"
        },
        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(185, 208, 209, 0.795)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(232, 238, 241, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(202, 231, 228, 0.799)"></stop>',
        estilosBody: {
            "color": "black",
            "background-image": "linear-gradient(to bottom, rgba(113, 201, 212, 0.86), #d2d6d6)"
        },
        fondoTexto: {
            "background-color": "rgb(103, 189, 205)"
        },
        colorTextoBoton: {
            "color": "black",
        }
    }

    const nublado = {

        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(19, 18, 18, 0.86), #8d868a)"
        },
        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(63, 63, 66, 0.06)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(34, 34, 34, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(0, 0, 0, 0.2)"></stop>',
        estilosBody: {
            "color": "white",
            "background-image": "linear-gradient(to bottom, rgba(19, 18, 18, 0.86), #8d868a)"
        },
        fondoTexto: {
            "background-color": "black"
        },
        colorTextoBoton: {
            "color": "white",
        }
    }

    const lluvia = {

        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(14, 98, 182, 0.86), #7ea5b8)"
        },
        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(62, 101, 156, 0.795)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(35, 68, 102, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(4, 154, 199, 0.799)"></stop>',
        estilosBody: {
            "color": "white",
            "background-image": "linear-gradient(to bottom, rgba(14, 98, 182, 0.86), #7ea5b8)"
        },
        fondoTexto: {
            "background-color": "black"
        },
        colorTextoBoton: {
            "color": "white",
        }
    }

    const tormenta = {

        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(35, 34, 31, 0.86), #4f4747)"
        },
        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(233, 229, 30, 0.795)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(222, 181, 105, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(173, 178, 10, 0.799)"></stop>',

        estilosBody: {
            "color": "white",
            "background-image": "linear-gradient(to bottom, rgba(14, 98, 182, 0.86), #7ea5b8)"
        },
        fondoTexto: {
            "background-color": "black"
        },
        colorTextoBoton: {
            "color": "white",
        }

    }

    const nieve = {

        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(255, 255, 255, 0.86), #dce8ef)"
        },
        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(183, 224, 235, 0.795)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(114, 170, 195, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(184, 231, 228, 0.799)"></stop>',

        estilosBody: {
            "color": "black",
            "background-image": "linear-gradient(to bottom, rgba(255, 255, 255, 0.86), #dce8ef)"
        },
        fondoTexto: {
            "background-color": " rgb(21, 128, 181)"
        },
        colorTextoBoton: {
            "color": "black",
        }

    }

    const niebla = {

        fondoSVG: {
            "background-image": "linear-gradient(to bottom, rgba(193, 180, 180, 0.86), #8d868a)"
        },
        etiquetasStop: '<stop offset="0%" style="stop-color:rgba(107, 108, 108, 0.795)"></stop>' +
            '<stop offset="50%" style="stop-color:rgba(126, 127, 128, 0.6)"></stop>' +
            '<stop offset="100%" style="stop-color:rgba(181, 181, 181, 0.799)"></stop>',

        estilosBody: {
            "color": "black",
            "background-image": "linear-gradient(to bottom, rgba(193, 180, 180, 0.86), #8d868a)"
        },
        fondoTexto: {
            "background-color": "rgb(165, 162, 162)"
        },
        colorTextoBoton: {
            "color": "black",
        }
    }


    let climaOrigen = "03d";

    let climaDestino = $('#origenDestino').data();


    ajustaEstiloPagina(climaDestino);

    /**
     * Cambia todo el diseño de la pagina en base al clima
     * de destino
     * @param {*} clima el tipo de clima de destino
     */
    function ajustaEstiloPagina(clima) {

        let imgParaClimaOrigen = imgClima(climaOrigen);
        $(imgOrigen).attr("src", imgParaClimaOrigen);

        switch (clima) {

            case "01d":
                cambiarFondo(soleado);
                $(imgDestino).attr("src", imgSoleado);
                break;

            case "02d":
                cambiarFondo(unaNube);
                $(imgDestino).attr("src", imgUnaNube);
                break;

            case "03d":
                cambiarFondo(unaNube);
                $(imgDestino).attr("src", imgUnaNube);
                break;

            case "04d":
                cambiarFondo(nublado);
                $(imgDestino).attr("src", imgNublado);
                break;

            case "09d":
                cambiarFondo(lluvia);
                $(imgDestino).attr("src", imgLluvia);
                break;

            case "10d":
                cambiarFondo(lluvia);
                $(imgDestino).attr("src", imgLluvia);
                break;

            case "11d":
                cambiarFondo(tormenta);
                $(imgDestino).attr("src", imgTormenta);
                break;

            case "13d":
                cambiarFondo(nieve);
                $(imgDestino).attr("src", imgNevado);
                break;

            case "50d":
                cambiarFondo(niebla);
                $(imgDestino).attr("src", imgNiebla);
                break;

        }

    }

    /**
 * Cambia el diseño de la pagina dependiendo el tipo de clima
 * @param {*} tipoClima objeto con las propieades css a cambiar
 */
    function cambiarFondo(clima) {
        $("svg").css(clima.fondoSVG);
        $("body").css(clima.estilosBody);
        $(".fondoTexto").css(clima.fondoTexto);
        $("button").css(clima.colorTextoBoton);

        linearGradient.html(clima.etiquetasStop);
    }

    /**
 * Devuelve la imagen correspondiente que va en 
 * la informacion del clima de origen
 * @param {*} climaOrigen el clima 
 * @returns un link a una imagen
 */
    function imgClima(clima) {
        switch (clima) {
            case "01d":
                return imgSoleado;

            case "02d":
                return imgAlgoSoleado;

            case "03d":
                return imgUnaNube;

            case "04d":
                return imgNublado;

            case "09d":
                return imgLluvia;

            case "10d":
                return imgLluvia;

            case "11d":
                return imgTormenta;

            case "13d":
                return imgNevado;

            case "50d":
                return imgNiebla;
        }
    }

});