const btnCifrar = document.getElementById('btn-cifrar');
btnCifrar.addEventListener('click', () => {
	const string= document.getElementById('frase').value;
	const offset=parseInt(document.getElementById('desplazamiento').value);
	frase.value=cipher.encode(offset,string);
});

const btnDescifrar = document.getElementById('btn-descifrar');
btnDescifrar.addEventListener('click', () => {
	const string= document.getElementById('frase').value;
	const offset=parseInt(document.getElementById('desplazamiento').value);
	frase.value=cipher.decode(offset,string);
});