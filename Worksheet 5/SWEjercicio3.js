var numeroUno=(parseInt(prompt("Introduce el numero 1")));
var numeroDos=(parseInt(prompt("Introduce el numero 2")));
var operacion=(prompt("Introduce la operacion(+, -, *, /)"));
var resultado;
switch(operacion){
	case "+":resultado=(numeroUno+numeroDos);break;
	case "-":resultado=(numeroUno-numeroDos);break;
	case "*":resultado=(numeroUno*numeroDos);break;
	case "/":resultado=(numeroUno/numeroDos);break;
}
alert(numeroUno+""+operacion+""+numeroDos+" = "+resultado+"");