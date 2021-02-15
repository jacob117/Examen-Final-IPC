//letiables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar

let finalizar = true

do {
  let precio_base = 2000

  //Valores de los recargos 
  let edad_18 = 0.1 // 10%
  let edad_25 = 0.2 // 20%
  let edad_50 = 0.3 // 30%
  
  let casado_18 = 0.1 // 10%
  let casado_25 = 0.2 // 20%
  let casado_50 = 0.3 // 30%
  
  let hijos_recargo = 0.2 // 20%
  let propiedad_recargo = 0.35 // 20%
  let sueldo_recargo = 0.05 // 20%

  
  //Recargo
  let recargo = 0
  let recargo_total = 0
  
  //Precio final 
  let precio_final = 0

//Mensajes de alerta para ingresar datos 
let nombre = prompt("Ingrese su nombre, por favor")
let edad = prompt("¿Cuantos años tiene? Ingrese solamente números")

  let sueldo = prompt("Ingrese su salario")
  let sueldo_numero = parseInt(sueldo)

let propiedad = prompt("¿Tiene Propiedades?", "si/no")
let Cantidad_prodiedad =0
if("SI" == propiedad.toUpperCase()){
  Cantidad_prodiedad = prompt("¿Cuantas propiedades tiene? Ingrese solamente números")
  Cantidad_prodiedad = parseInt(Cantidad_prodiedad)
}

let casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
let edad_conyuge
//convirtiendo las edades ingresadas a números 
let edad_numero = parseInt(edad)
let edad_conyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números")
  //convirtiendo la edad del cónyuge si se esta casado/a
  edad_conyuge_numero = parseInt(edad_conyuge)
}

let hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
let cantidad_hijos
let cantidad_hijos_Numero = 0
/**
 * 1. convierta la cantidad de hijos a numero
 */
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos tiene? Ingrese solamente números")
  //convirtiendo la edad del cónyuge si se esta casado/a
  cantidad_hijos_Numero = parseInt(cantidad_hijos)
}

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
if(edad_numero>=25 && edad_numero<50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
if(edad_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango

/** 
 * 2. Recargo por la edad del conyuge
 */

if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
if(edad_conyuge_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 

 if (cantidad_hijos_Numero > 0){
  recargo = precio_base * (hijos_recargo * cantidad_hijos)
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo 
 }

 if (Cantidad_prodiedad > 0){
  recargo = precio_base * (propiedad_recargo * Cantidad_prodiedad)
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo 
 }

 if (sueldo_numero > 0){
  recargo = (sueldo_recargo * sueldo_numero)
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo 
 }

precio_final = precio_base + recargo_total
//Resultado

document.write("Para el asegurado "+nombre + "<br> El recargo total sera de: "+recargo_total + " <br>El precio sera de: "+ precio_final +"<br>")

let Resultado = prompt("Desea finalizar las cotizaciones", "si/salir")
if("SALIR" == Resultado.toUpperCase()){  
  finalizar = false
}

}while(finalizar )