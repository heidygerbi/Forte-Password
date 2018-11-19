
	function cifrarFrase(){
		//saber la frase
		const fraseInicial= document.getElementById('frase').value;
		//alert(`Frase inicial: ${fraseInicial}`);
		//CONVERTIR FRASE EN MAYUSCULA
		const fraseMayuscula=fraseInicial.toUpperCase();
		//alert(`Frase mayuscula: ${fraseMayuscula}`);
		//saber el desplazamiento
		const desplazamiento= document.getElementById('desplazamiento').value;
		//alert(`desplazamiento: ${desplazamiento}`);
		//saber tamaño de la frase
		const largoFrase= fraseInicial.length;
		//alert(`largo de la frase ${largoFrase}`);
		//recorrer letra por letra 
		for (let i=0; i<= fraseMayuscula.length-1; i++) {
			alert (`${i} : ${fraseMayuscula.charCodeAt(i)}`);//transforma en ANCII
			const resultado=((((fraseMayuscula.charCodeAt(i)-65)+desplazamiento)%26)+65);
			alert (`el nuevo codigo ASCII es: ${resultado} `); 
		}


	}
	function descifrarFrase(){
		const fraseInicial= document.getElementById('frase').value;
		alert(`${fraseInicial}`);

	}	

	document.getElementById('cifrar').addEventListener('click', cifrarFrase);	
	document.getElementById('descifrar').addEventListener('click', descifrarFrase);	
