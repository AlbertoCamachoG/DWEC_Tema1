var numero=(parseInt(prompt("Introduce el numero")));
function es(number, other) {
	if(number%other===0)
		return true;
	else
		return false;
}
if(es(numero, 2))
	alert("es par");
else
	alert("no es par");
if(es(numero, 3))
	alert("es multiplo de 3");
else
	alert("no es multiplo de 3");
if(es(numero, 5))
	alert("es multiplo de 5");
else
	alert("no es multiplo de 5");