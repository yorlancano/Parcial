function sumarCuadros(arrayNumeros) {
    arrayNumeros = arrayNumeros.filter(numero => typeof numero === 'number');

    let resultado = "";
    let sumaTotal = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        const numero = arrayNumeros[i];
        const longitud = String(numero).length;

        resultado += "+ " + "-".repeat(longitud) + " +\n";

        resultado += "| " + numero + " |\n";

        resultado += "+ " + "-".repeat(longitud) + " +\n";

        sumaTotal += numero;
    }

    
    const longitudTotal = String(sumaTotal).length;
    resultado += "+ " + "=".repeat(longitudTotal) + " +\n";
    resultado += "| " + sumaTotal + " |\n";
    resultado += "+ " + "=".repeat(longitudTotal) + " +\n";

    console.log(resultado);
}

const arrayNumeros = [1, 23, 0, 45553, 3267, 0, 12354, 123456];
sumarCuadros(arrayNumeros);



