const btnCifrar = document.getElementById('btn-cifrar');
btnCifrar.addEventListener('click', () => {
	const dificultad= document.getElementById('dificultad').value;
	let frase=document.getElementById('frase');
	const string= document.getElementById('frase').value;
	const offset=parseInt(document.getElementById('desplazamiento').value);
	const esp=parseInt(document.getElementById('esp').value);
	const slash=parseInt(document.getElementById('slash').value);	
	frase.value=cipher.encode(offset,string,esp,slash,dificultad);
});

const btnDescifrar = document.getElementById('btn-descifrar');
btnDescifrar.addEventListener('click', () => {
	const dificultad= document.getElementById('dificultad').value;
	const string= document.getElementById('frase').value;
	const offset=parseInt(document.getElementById('desplazamiento').value);
	let frase=document.getElementById('frase');
	frase.value=cipher.decode(offset,string,dificultad);
});
const imgConf = document.getElementById('img-conf');
imgConf.addEventListener('click', () => {
	document.getElementById("nivel").style.display="block";
	document.getElementById("seleccion-esp").style.display="block";
	document.getElementById("seleccion-slash").style.display="block";
	document.getElementById("boton-conf").style.display="block";
	document.getElementById("contenedor-frase").style.display="none";
	document.getElementById("botones").style.display="none";
	document.getElementById("dif").style.display="block";
});
const btnConf = document.getElementById('btn-conf');
btnConf.addEventListener('click', () => {
	document.getElementById("nivel").style.display="none";
	document.getElementById("seleccion-esp").style.display="none";
	document.getElementById("seleccion-slash").style.display="none";
	document.getElementById("boton-conf").style.display="none";
	document.getElementById("dif").style.display="none";
	document.getElementById("contenedor-frase").style.display="block";
	document.getElementById("botones").style.display="block";
});
const fraseMayuscula = document.getElementById('frase');
fraseMayuscula.addEventListener('blur', () => {
	let frase=document.getElementById('frase');
	frase.value=fraseMayuscula.value.toUpperCase();
});
