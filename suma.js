function listaPrimos() {
    var lista = [2, 4, 7, 8, 9];
    var primosL = [];
    lista.forEach(function (e) {
        var primo = true;
        if (e < 2) {
            primo = false;
        }
        else {
            for (var i = 2; i <= Math.sqrt(e); i++) {
                if (e % i === 0) {
                    primo = false;
                    break;
                }
            }
        }
        if (primo) {
            primosL.push(e);
        }
    });
    var resultado = 1;
    primosL.forEach(function (e) {
        resultado *= e;
    });
    console.log("Primos:", primosL);
    console.log("Multiplicación:", resultado);
}
listaPrimos();
function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var suma = num1 + num2;
    var resultado = suma;
    document.getElementById('resultado').innerHTML = resultado.toString();
    ;
}
