//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedad_recargo = 0.35 // 35%

var sueldo_recargo = 0.05 // 5%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Variable de salida del programa
var salida = "";

while (salida != "SALIR"){
  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor");

  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números");

  var casado = prompt("¿Está casado actualmente?", "si/no");

  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge = 0;

  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
  }

    //convirtiendo las edades ingresadas a números 
  var edad_numero = parseInt(edad);

  //convirtiendo la edad del cónyuge si se esta casado/a
  var edad_conyuge_numero = 0;

  if("SI" == casado.toUpperCase()){
    edad_conyuge_numero = parseInt(edad_conyuge);
  }

  var hijos = prompt("¿Tiene hijos o hijas?", "si/no");
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos = 0;

  if("SI" === hijos.toUpperCase()){
    cantidad_hijos = prompt("Cuántos hijos tiene? Ingrese solamente números");
  }
  /**
  * 1. convierta la cantidad de hijos a numero
  */
  var cantidad_hijos_numero = parseInt(cantidad_hijos);

  //Pregunta de existencia de propiedades
  var propiedad = prompt("¿Tiene propiedades?", "si/no");

  //Cantidad de propiedades
  var cantidad_propiedades = 0;

  if("SI" === propiedad.toUpperCase()){
    cantidad_propiedades = prompt("Cuántas propiedes tiene? Ingrese solamente números");
  }

  var cantidad_propiedades_numero = parseInt(cantidad_propiedades);

  //Pregunta por salario
  var salario = prompt("¿Cuál es su salario? Ingresa solamente números sin la moneda");

  var salario_numero = parseInt(salario);

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas

  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18;
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo;
  }
  //aqui puede colocar un else if() con el siguiente rango
  else if(edad_numero>=25 && edad_numero<50){
    recargo = precio_base * edad_25;
    recargo_total = recargo_total + recargo;
  }
  else if(edad_numero>=50){
    recargo = precio_base * edad_50;
    recargo_total = recargo_total + recargo;
  }
  /** 
  * 2. Recargo por la edad del conyuge
  */
  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    recargo = precio_base * casado_18;
    recargo_total = recargo_total + recargo;
  }
  else if(edad_conyuge_numero>=25 && edad_conyuge_numero<59){
    recargo = precio_base * casado_25;
    recargo_total = recargo_total + recargo;
  }
  else if(edad_conyuge_numero>=50){
    recargo = precio_base * casado_50;
    recargo_total = recargo_total + recargo;
  }
  /**
  * 3. Recargo por la cantidad de hijos 
  */ 
  if(cantidad_hijos_numero>0){
    recargo = precio_base * cantidad_hijos_numero * hijos_recargo;
    recargo_total = recargo_total + recargo;
  }

  /**
   * 4. Recargo por la cantidad de propiedades
   */
  if(cantidad_propiedades>0){
    recargo = precio_base * cantidad_propiedades_numero * propiedad_recargo;
    recargo_total = recargo_total + recargo;
  }

    /**
   * 5. Recargo por el salario
   */
  if(salario_numero>0){
    recargo = salario_numero * sueldo_recargo;
    recargo_total = recargo_total + recargo;
  }

  precio_final = precio_base + recargo_total; 
  //Resultado
  alert ("Para el asegurado "+nombre);
  alert ("El recargo total sera de: "+recargo_total);
  alert ("El precio sera de: "+precio_final);

  salida = prompt("Ingresa: Salir, si ya no deseas solicitar cotizaciones. Ingresa cualquier otra palabra para continuar");
  salida = salida.toUpperCase();
};
