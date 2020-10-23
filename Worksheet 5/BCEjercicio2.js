var numero=(parseInt(prompt("Introduce un numero menor que 100")));
if(numero<=100){
for (var i = numero; i < 101; i++) {
   document.write(i);
   document.write(" 	");
}
}else
alert("Ese numero no es menor que 100");