var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "red";
var n =  "black"

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  console.log("Linea " + l);
}
for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 300, yi, xf, 0);
  console.log("Linea " + l);
}
dibujarLinea(n, 1,1,1,299);
dibujarLinea(n, 1,299,299,299);
dibujarLinea(n, 299,1,1,1);
dibujarLinea(n, 299,299,299,1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

 function dibujoPorClick()
 {
   alert("no me toques aqu");
 }
