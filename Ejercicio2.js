
let hora = 5;
let mensaje;
function saludo(hora) {
         
    if((hora >= 6) && (hora < 12)){
      mensaje = "Buenos días!";
    } else if ( (hora >= 12) && (hora < 20)) {
       mensaje = "Buenas tardes!";
    } else {
       mensaje = "Buenas noches!";
    }
   return mensaje
}

console.log(saludo(hora)); 
         
function islandsCape(widht, height){
    if(widht > height)
    return true

    else {
       return false
    }

}

console.log(islandsCape(1200,500));
         
    

