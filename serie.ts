function leibnizPi(n: number): number {
    let suma = 0;

    for (let i = 0; i < n; i++) {
        const termino = 1 / (2 * i + 1);
        suma += (i % 2 === 0) ? termino : -termino;
    }

    return 4 * suma;
}

const n = 100000;
const pi = leibnizPi(n);

alert("Aproximación:", pi);
alert("Valor de pi:", Math.PI);

if (Math.abs(pi - Math.PI) < 0.001) {
    console.log("esta cerca");
} else {
    console.log("no esta cerca ");
}

