let numero1 = parseInt(prompt("Ingrese el valor de un lado del rectangulo"))
let numero2 = parseInt(prompt("Ingrese el valor del segundo lado del rectangulo"))

function perimetro(){
    p = 2*(numero1 + numero2)
    return p;
}

perimetro()
document.write(`El perimetro es ${p}`)