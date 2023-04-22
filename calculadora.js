$(document).ready(function () {
    let entrada = "";
    let operacion = "";
    let primerOperando = "";

    function actualizarPantalla() {
        $('#display').val(entrada);
    }

    $('.number').on('click', function () {
        entrada += $(this).text();
        actualizarPantalla();
    });

    $('.operation').on('click', function () {
        if (entrada === "") {
            alert("Por favor, ingrese un número antes de seleccionar una operación.");
            return;
        }

        if (operacion === "") {
            primerOperando = entrada;
            entrada = "";
            operacion = $(this).text();
        } else {
            alert("Solo se permite una operación a la vez.");
        }
    });

    $('#equals').on('click', function () {
        if (operacion === "" || entrada === "") {
            alert("Por favor, ingrese ambos números antes de realizar una operación.");
            return;
        }

        const primerNumero = parseFloat(primerOperando);
        const segundoNumero= parseFloat(entrada);
        let resultado;

        switch (operacion) {
            case '+':
                resultado = primerNumero + segundoNumero;
                break;
            case '-':
                resultado = primerNumero - segundoNumero;
                break;
            case '*':
                resultado = primerNumero * segundoNumero;
                break;
            case '/':
                if (segundoNumero === 0) {
                    alert("No se puede dividir por cero.");
                    return;
                }
                resultado = primerNumero / segundoNumero;
                break;
        }

        entrada = resultado.toString();
        primerOperando = "";
        operacion = "";
        actualizarPantalla();
    });

    $('#clear').on('click', function () {
        entrada = "";
        operacion = "";
        primerOperando = "";
        actualizarPantalla();
    });
});