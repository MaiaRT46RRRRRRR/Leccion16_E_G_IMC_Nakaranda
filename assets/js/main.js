var calcular = document.getElementById('calcular');

calcular.onclick = function() {
  var texto = /^[a-zA-Z]*$/;
  var numeros = /^[0-9]*$/;
  var nombre = document.getElementById('nombre').value ;
  var peso= document.getElementById('peso').value ;
  var estatura = document.getElementById('estatura').value ;
  var records = document.getElementById('records') ;
//alert ("basio "  + auxilio +"calra");
if (nombre !="" && peso != "" && estatura!="") {
   if(nombre.search(texto)) {
         alert("Ingresa sólo letras");}
        else if ((peso.search(numeros))||(estatura.search(numeros))){
         alert("Ingresa sólo numero en los valores de peso y estatura");}
         else {
         var x= "<li> Hola  " + nombre.toUpperCase() +
                " ,tu Indice de Masa Corporal es : " +
                (peso/(Math.pow(estatura,2))).toFixed(2)  +"</ul>" ;
    }
} else {
     return alert("Ingrese todos los datos solicitados");
};

records.innerHTML = x;
};
