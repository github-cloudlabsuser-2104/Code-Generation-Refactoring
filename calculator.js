function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: División por cero";
    }
}

function calculadora() {
    const numero1 = parseFloat(prompt("Introduce el primer número: "));
    const numero2 = parseFloat(prompt("Introduce el segundo número: "));
    
    console.log(`La operación de suma para ${numero1} y ${numero2} es: ${suma(numero1, numero2)}`);
    console.log(`La operación de resta para ${numero1} y ${numero2} es: ${resta(numero1, numero2)}`);
    console.log(`La operación de multiplicación para ${numero1} y ${numero2} es: ${multiplicacion(numero1, numero2)}`);
    console.log(`La operación de división para ${numero1} y ${numero2} es: ${division(numero1, numero2)}`);
}

calculadora();