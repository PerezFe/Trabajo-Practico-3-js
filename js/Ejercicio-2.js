// crear un array vacio llamado ciudades
// pedir medianto un promt el nombre de una ciudad
                 //agregar al array el nombre de las ciudades introducidas por el usuario




let ciudades = [];


while(agregarCiudades = prompt("Introduce el nombre de una ciudad")){
    
        ciudades.push(agregarCiudades);
    
}
ciudades.push("Paris");


document.write(`<ul>`)
for (let i = 0; i < ciudades.length; i++){
    
    document.write(`<li>${ciudades[i]}</li>`)

}
document.write(`</ul>`)
document.write(`La cantidad de ciudades ingresadas es ${ciudades.length}`)

if (ciudades[0] != undefined){
    document.write(`<br> La ciudad en la posicion 0 es ${ciudades[0]}`)
}

if (ciudades[2] != undefined){
    document.write(`<br> La ciudad en la posicion 3 es ${ciudades[2]}`)
}else{
    document.write(`<br>Sin elementos para mostrar en la posicion 3`)
}

if (ciudades[ciudades.length-1] != undefined){
    document.write(`<br>La ciudad en la ultima posicion es ${ciudades[ciudades.length-1]}`)
}
if (ciudades[1] != undefined){
    ciudades[1] = "Barcelona"
}
if (ciudades[1] != undefined){
    document.write(`<br> La ciudad en la segunda posicion es ${ciudades[1]}`)
}else{
    document.write(`<br>Sin elementos para mostrar en la posicion 1`)
}









