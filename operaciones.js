

function actual() {
	fecha = new Date();
	hora = fecha.getHours();
	minuto = fecha.getMinutes();
	segundo = fecha.getSeconds();
	if (hora < 10) {
		hora = "0" + hora;
	}
	if (minuto < 10) {
		minuto = "0" + minuto;
	}
	if (segundo < 10) {
		segundo = "0" + segundo;
	}
	mireloj = hora + " : " + minuto + " : " + segundo;
	return mireloj;
}
function actualizar() {
	mihora = actual();
	mireloj = document.getElementById("reloj");
	mireloj.innerHTML = mihora;
}
setInterval(actualizar, 1000);

var aleatorio = Math.floor(Math.random() * 100) + 1;
var cont = 9;
var numero;
var botonReset;
//var nombre = prompt("Dime tu nombre");



function verificar() {
	//document.getElementById( "nombre" ).textContent += nombre +' '; 

	var numero = Number(document.getElementById("caja").value);
	document.getElementById("mostrar").textContent += numero + ' ';
	if (numero != aleatorio && numero < aleatorio) {
		document.getElementById("medir").innerHTML = "El numero ingresado es muy bajo";
		document.getElementById("medir").style.color = "blue";
	} else if (numero != aleatorio && numero > aleatorio) {
		document.getElementById("medir").innerHTML = "El numero ingresado es muy alto";
		document.getElementById("medir").style.color = "red";
	} else if (numero == aleatorio) {
		document.getElementById("medir").innerHTML = "felicidades ganaste";
		document.getElementById("medir").style.color = "orange";
		document.getElementById("btnveri").disable = true;
		document.getElementById("caja").disable = true;

		botonReset = document.createElement('button');
		botonReset.textContent = 'Reiniciar juego';
		botonReset.id = 'Reiniciar';
		document.body.appendChild(botonReset);
		botonReset.addEventListener('click', reiniciarjuego);
	}

	if (cont == 0) {

		document.getElementById("medir").innerHTML = "Perdiste, sigue jugando";

		document.getElementById("btnveri").disabled = true;

		document.getElementById("caja").disabled = true;

		botonReset = document.createElement('button');

		botonReset.textContent = 'Reiniciar juego';

		botonReset.id = 'Reiniciar';

		document.body.appendChild(botonReset);

		botonReset.addEventListener('click', reiniciarJuego);

	}

	document.getElementById("caja").value = "";

	document.getElementById("caja").focus();
	cont--;


}

function reiniciarJuego() {

	location.reload(true);

}
