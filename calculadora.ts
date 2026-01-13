function listaPrimos(): void {
    let lista: number[] = [2, 4, 7, 8, 9];
    let primosL: number[] = [];

    lista.forEach(e => {
        let primo = true;

        if (e < 2) {
            primo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(e); i++) {
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

    let resultado = 1;
    primosL.forEach(e => {
        resultado *= e;
    });

    console.log("Primos:", primosL);
    console.log("Multiplicación:", resultado);
}

listaPrimos();


function sumar():void{
    let num1: number = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    let num2: number = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    let suma: number = num1 + num2;
    let resultado: number = suma;
(document.getElementById('resultado') as HTMLElement).innerHTML=resultado.toString();;
}