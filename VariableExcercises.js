// Madame zazu
let city = "Vancouver";
let work = "Google.";
let award = "Diseño";
let pets = "mascotas"
let age = 35;

const MadameZazuPrediction = "1. A la edad de " + age + " voy a vivir en " + city 
+ " con mis " + pets + " trabajando en " + work 

console.log(MadameZazuPrediction);

//Calculadora Edad

function AgeCalc(birthYear, actualYear){
    return actualYear - birthYear
 }

 console.log("2. Tú edad es", AgeCalc(1990, 2020));


// Calculadora de figuras geometricas.

// Águila o Sello

// intercambiando variables 
//let a = 'red';
//let b = 'blue';

//console.log(a);
//console.log(b);

stars = "";
let i = 0;
console.log("While loop")
while(i <= 10) {
    console.log("stars:", i, stars);
    stars += "*";
    i++;
}

console.log(" Do While Loop")
stars = "";
i =0;
do{
    console.log("stars", i, stars);
    stars += "*";
    i++;
}
while(i <= 10)


//Tablas de Multiplicar


for(i = 1; i <= 10; i++){    
    console.log("Tabla del ",i);
    for(j = 1; j <= 10; j++){    
        console.log(i, "*", j, "=", i*j);
    }
}