

let conversion = Number(prompt("Ingresa el numero de la conversion que quieras hacer: \n 1 - Celsius (Cº) a Fahrenheit (Fº) \n 2 - Fahrenheit (Fº) a Celsius (Cº)"))

//FUNCIONES

function celAFahr(){
    let numero = Number(prompt("Ingrese la Temperatura en digitos que quiere convertir:"))
    return (numero * (9/5) + 32);
}
function fahrACel(){
    let numero = Number(prompt("Ingrese la Temperatura en digitos que quiere convertir:"))
    return (5/9) * (numero - 32);
}


if (conversion === 1){    
    alert("La temperatura es de : " + celAFahr() + "ºF") 
}
else if (conversion === 2){
    alert("La temperatura es de : " + fahrACel() + "ºC")
}
else{
    alert("Ingresaste un dato incorrecto, refresca la pagina para volver a ejecutar.")
}