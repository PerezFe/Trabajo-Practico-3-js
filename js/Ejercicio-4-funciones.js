let numero = parseInt(prompt("Ingrese un nro para mostrar su tabla del 1 al 10"))

if( !isNaN(numero) ){

    for (let i = 1; i < 11; i++) {
        document.write(`${i} x ${numero} es = ${i*numero} <br>`)
    
    }

}else{
    document.write("No introduciste un nro válido")
}    
