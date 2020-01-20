
//ScopeGLobal
var x = 5;
var y = 333;

function oneFunctionScope(){
    //function Scope
    let x = 10;
    function loop(){
        let z = "estoy dentro del loop";
        console.log(x,"x");
        console.log(y,"y");
        
    }
    loop();
    console.log(x);
    
oneFunctionScope();
}

let calculandoEdad = function (birthYear, actualYear) {
return actualYear - birthYear;
};
let isMayorDeEdad = function (fn) {
    let age = fn(2015,2020);

    if(age > 18){
        console.log("Es mayor de edad");
    }
    else { 
        console.log("Es menor de edad");
    }
}
isMayorDeEdad(calculandoEdad);


let age = prompt ("Please enter your age")
alert(age);

let name = prompt ("Introduce tu nombre")
let saludo = alert("Hola" + " " + name);


function saludo(name){
    alert("Hola "  + name);
}
    function getName(fn){
        let name = prompt("Introduce nombre");
        fn(name);
    }
    getName(saludo);
    console.log(saludo);

function setColor(){
        document.body.style.backgroundColor = "aqua";
}

function changeLetterColor(){
    let elem = document.getElementById('cajita');
    elem.style.color = "blue";
}

function changeLetterColorBlack(){
    let elem = document.getElementById('cajita');
    elem.style.color = "black";
}

function changeColor()
{
    let element = document.getElementsByClassName("styleClass");
    elemen[0].style.backgroundColor = "blue";
}


function save(){
    alert("save");
    let element = document.getElementsById('name').value;
    if(element !== "Mayra"){
        alert("No se puede enviar hasta poner MAY")
        return;
    }
}