function listaPrimosDinamica() {
    var input = document.getElementById("lista");
    var valores = input.value
        .split(",")
        .map(function (n) { return parseInt(n.trim()); })
        .filter(function (n) { return !isNaN(n); });
    var primos = [];
    valores.forEach(function (e) {
        var esPrimo = true;
        if (e < 2) {
            esPrimo = false;
        }
        else {
            for (var i = 2; i <= Math.sqrt(e); i++) {
                if (e % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
        if (esPrimo)
            primos.push(e);
    });
    var multiplicacion = 1;
    primos.forEach(function (p) { return multiplicacion *= p; });
    document.getElementById("primos").innerText = primos.join(", ");
    document.getElementById("multiplicacion").innerText = multiplicacion.toString();
}
