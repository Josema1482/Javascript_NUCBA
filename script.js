/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.*/

/*const numero = prompt("Ingrese numero");

function parImpar(num){
    if(num%2 === 0){
        console.log(`El numero: ${numero} --> es PAR`);
    }else{
        console.log(`El numero: ${numero} --> es IMPAR`);
    }
}

parImpar (numero);*/

/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, 
y si ninguno lo es, indicar por consola que son iguales*/

/*const numeroUno = prompt("Ingrese primer numero");
const numeroDos = prompt("Ingrese segundo numero");

function mayormenor(num1, num2){
    if(num1 > num2){
        console.log(`El numero ${numeroUno} es mayor que ${numeroDos}`);
    }else if(num2 > num1){
        console.log(`El numero ${numeroDos} es mayor que ${numeroUno}`);
    }else{
        console.log("Los numeros son iguales");
    }
}

mayormenor(numero1, numero2);*/

/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
const multiploCinco = prompt("Ingrese un numero:");*/

/*function cinco(numero){
    if(numero%5 === 0){
        console.log(`El numero ${multiploCinco} es multiplo de 5`);
    }else{console.log(`El numero ${multiploCinco} no es multiplo de 5`);}
}

cinco(multiploCinco);*/

/*4- Crear una función que reciba un número por parámetro e imprima por consola todos 
los números desde el 0 hasta llegar a ese número.*/

/*const ingresarNum = prompt("Ingresa un numero:");

function numHasta(num){
    for(i = 0; i <= num; i++){
        console.log(i);
    }
}

numHasta(ingresarNum);*/

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  
esa palabra la cantidad correspondiente al número indicado.*/

/*const palabra = "perro";
const numero = 5;

function contar (numero, palabra){
    for(i = 1; i <= numero; i++){
        console.log(palabra);
    }
}

contar(numero, palabra);*/

/*6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.*/

/*let patagonia = ["Rio Negro", "Neuquen", "Chubut", "Santa Cruz", "Tierra del Fuego"];

function patagoniaArray(pcias){
    for(pcias of patagonia){
console.log(pcias);
    }
}

patagoniaArray(patagonia);*/

/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/

/*function arraySinQuinto(sinquinto) {
    for (let i = 0; i < sinquinto.length; i++) {
        if (i === 4) {
            continue;
        }
        console.log(sinquinto[i]);
    }
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arraySinQuinto(numeros);*/

/*8 - Crea una función que reciba un array de números y un número 
por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/

/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numMulti = 5;

function operacion (aray, multi){
for(i = 0; i < aray.length; i++){
    console.log(aray[i]*multi);
}
}

operacion(array, numMulti);*/