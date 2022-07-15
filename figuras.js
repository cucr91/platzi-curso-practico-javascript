//  Código cuadrado
console.group("Cuadrado");
//const  ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cms");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perímetro del cuadrado miden: " + perímetroCuadrado + "cms");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cms2");
console.groupEnd();



//Código Triangulo
console.group("Triangulos");
/*const  ladoTriangulo1 = 6;
const  ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cms, " + + ladoTriangulo2 + "cms, " + ladoTrianguloBase + "cms. ");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de " + alturaTriangulo + "cms");
*/
function perímetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es de " + perímetroTriangulo + "cms.");

function areaTriangulo(base, altura){
return (altura * base) / 2;
} 
//console.log("El area del triangulo es de " + areaTriangulo + "cms2");
console.groupEnd();



//Còdigo círculo
console.group("círculo");
//radio
//function radioCirculo(radio){
//return radio;
//}
//console.log("El radio del círculo es : " + radioCirculo + "cms, ");
// diametro
function diametroCirculo(radio){

    return radio * 2;
}
//console.log("El diametro del círculo es : " + diametroCirculo + "cms, ");

// PI
const PI = Math.PI;
console.log("PI  es : " + PI);

// Circunsferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
// console.log("El perímetro del círculo es : " + perimetroCirculo + "cms, ");

//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El area del círculo es : " + areaCirculo + "cms, ");
console.groupEnd();

// Aqui comenzamos a interactuar en Html.

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const area = areaCuadrado(value);
alert(area);
}