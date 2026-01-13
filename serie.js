function leibnizPi(n) {
    var suma = 0;
    for (var i = 0; i < n; i++) {
        var termino = 1 / (2 * i + 1);
        suma += (i % 2 === 0) ? termino : -termino;
    }
    return 4 * suma;
}
var n = 100000;
var piAprox = leibnizPi(n);
alert("Aproximación:", piAprox);
alert("Valor de pi:", Math.PI);
if (Math.abs(piAprox - Math.PI) < 0.001) {
    console.log("esta cerca");
}
else {
    console.log("no esta cerca ");
}
