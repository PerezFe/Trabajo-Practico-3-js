let numero1 = parseInt(prompt("Ingrese el valor de un lado del rectangulo"))
let numero2 = parseInt(prompt("Ingrese el valor del segundo lado del rectangulo"))
console.log(numero1)
console.log(numero2)


function perimetro(){
    p = 2*(numero1 + numero2)
}

perimetro()
document.write(`El perimetro es ${p}`)



