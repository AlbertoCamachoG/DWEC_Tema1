var edad=(parseInt(prompt("Introduce tu edad")));
var edadMaxima=(parseInt(prompt("Introduce tu edad maxima")));
var comidoCadaDia=(parseInt(prompt("Introduce el numero de consumiciones por dia (en numero)")));
var cantidadSnack=((edadMaxima-edad)*360*comidoCadaDia);
if(edad===NaN || edadMaxima===NaN ||comidoCadaDia===NaN)
document.write("Has introducido mal los datos");
else
document.write("You will need "+cantidadSnack+" to last you until the ripe old age of "+edadMaxima);