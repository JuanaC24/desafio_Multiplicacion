
function solicitarNumero() {
    let numero = parseInt(prompt("Hola es hora de calcular las tablas y el factorial de un numero del 1 al 20:😉"));
    while (isNaN(numero) || numero < 1 || numero > 20) {
        alert("No No NO.😒");
        numero = parseInt(prompt("Ingrese un número entre 1 y 20:😀"));
    }
    return numero;
}

function factorial(numero) {
    let resultado = "";

    for (let i = 1; i <= numero; i++) {
        let factorialResultado = 1;
       for(let j = 1;j<= i; j++){
        factorialResultado *=j;
       }
        resultado += `Factorial de ${i} es: ${factorialResultado}<br>`; 
    }

    return resultado; 
}


function generarTablasYFactoriales(numero) {
    let resultado = ""; 

    resultado += `Tablas de multiplicar para ${numero}:<br>`;
    for (let j = 1; j <= numero; j++) {
        resultado += `${j} x ${numero} = ${j * numero}<br>`;
    }
    resultado += `${factorial(numero)}<br><br>`; 

    return resultado; 
}

const numeroIngresado = solicitarNumero();


const resultados = generarTablasYFactoriales(numeroIngresado);

document.write(resultados);

