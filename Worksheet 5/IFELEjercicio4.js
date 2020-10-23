var examenUno=(parseInt(prompt("Introduce la nota del primer examen")));
var examenDos=(parseInt(prompt("Introduce la nota del segundo examen")));
var trabajoUno=(parseInt(prompt("Introduce la nota del primer trabajo")));
var trabajoDos=(parseInt(prompt("Introduce la nota del segundo trabajo")));
var media=((((examenUno+examenDos)*0.75)+((trabajoUno+trabajoDos)*0.25))/2)
if(examenUno>=4.5 && examenDos>=4.5 && trabajoUno>=4.5 && trabajoDos>=4.5 && media>=5)
alert("Has aprobado");
else
alert("L");