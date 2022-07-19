let suma = [];

function tirarDados(){
    let numero1 = Math.floor(Math.random() * 6)+1;
    let numero2 = Math.floor(Math.random() * 6)+1;
    return numero1 + numero2;
}

////////////////////////////////////////

for (let i = 0; i < 50; i++) {
    suma.push(tirarDados())
     
}


document.write(suma)




