
/*
//CODIGO CUADRADO
console.group("cuadrado")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado son " + ladoCuadrado + "cms.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es; " + perimetroCuadrado + "cms.");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es; " + areaCuadrado + "cm2.");
console.groupEnd();


//CODIGO TRIANGULO
console.group("triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoBase = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 + "cms," 
    + ladoTriangulo2 + "cms," 
    + ladoBase + "cms."
    );

    const alturaTriangulo = 5.5;
    console.log("La altura del triangulo es de: " + alturaTriangulo + "cms.");

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBase;
    console.log("El Perimetro del triangulo es de: " + perimetroTriangulo + "cms.");

    const areaTriangulo = (ladoBase * alturaTriangulo) / 2
    console.log("El area del triangulo es de: " + areaTriangulo + "cms2");
 console.groupEnd();


//CODIGO CIRCULO
console.group("circulo");
const radio = 5;
console.log("El radio del circulo es de: " + radio + "cms.");
const diametroCirculo = radio * 2;
console.log("El diametro del circulo es de: " + diametroCirculo + "cms.");
const PI = Math.PI;
console.log("El valor de PI es de: " + PI + "cms.");
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de: " + perimetroCirculo + "cms.");
const areaCirculo = (radio * radio) * PI;
console.log("El area del circulo es de: " + radio + "cms2");

console.groupEnd();
 */





//CODIGO CUADRADO
console.group("cuadrado")

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado ){
    return lado * lado;
}
console.groupEnd();



//CODIGO TRIANGULO
console.group("triangulo")

function perimetroTriangulo(lado1, lado2, lado3){
return lado1 + lado2 + lado3;
}
function areaTriangulo(ladoBase, altura){
    return (ladoBase * altura) / 2;
    }
console.groupEnd();



//CODIGO CIRCULO
console.group("circulo")
function diametroCirculo(radio){
return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
    }
function areaCirculo(radio){
        return (radio * radio) * PI;
        }
console.groupEnd();

//AQUI INTERACTUAMOS CON HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const perimetroTotal = parseInt(input1.value) + parseInt(input2.value) +parseInt(input3.value);
    alert(perimetroTotal); 
  
}

function calcularAreaTriangulo(){
    //const input1 = document.getElementById("inputTriangulo1");
    //const input2 = document.getElementById("inputTriangulo2");
    //const input3 = document.getElementById("inputTriangulo3");
    //const areaTotal = areaTriangulo(valueTotal);
    alert("Por el momento esta función no está disponible"); 
}

function calcularDiamentroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
    //alert("Por el momento esta función no está disponible"); 
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;    
    const diametro = value * 2;
    const perimetroCirculo = diametro * PI;
    alert(perimetroCirculo);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;    
    const areaCirculo = (value * value) * PI;
    alert(areaCirculo);
}