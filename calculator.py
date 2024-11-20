def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b

def division(a, b):
    if b != 0:
        return a / b
    else:
        return "Error: División por cero"

def calculadora():
    numero1 = float(input("Introduce el primer número: "))
    numero2 = float(input("Introduce el segundo número: "))
    
    print(f"La operación de suma para {numero1} y {numero2} es: {suma(numero1, numero2)}")
    print(f"La operación de resta para {numero1} y {numero2} es: {resta(numero1, numero2)}")
    print(f"La operación de multiplicación para {numero1} y {numero2} es: {multiplicacion(numero1, numero2)}")
    print(f"La operación de división para {numero1} y {numero2} es: {division(numero1, numero2)}")

if __name__ == "__main__":
    calculadora()