let frase = prompt("Ingrese una cadena de texto con mayusculas, minusculas o ambas")

function comprobarFrase(frase){
    let mayus = false;
    let minus = false;
    if(frase == frase.toUpperCase() ){
        mayus = true
    }
    if(frase == frase.toLowerCase() ){
        minus = true
    }
    if (!minus && !mayus){
        document.write("El texto contiene mayusculas y minusculas")
    }else if (minus){
        document.write("El texto contiene solo minusculas")
    }else{
        document.write("El texto contiene solo mayusculas")

    }

}

comprobarFrase(frase)

