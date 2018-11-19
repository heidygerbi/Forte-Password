
	function cifrarFrase(){
		//saber la frase
		const fraseInicial= document.getElementById('frase').value;
		//alert(`Frase inicial: ${fraseInicial}`);
		//CONVERTIR FRASE EN MAYUSCULA
		const fraseMayuscula=fraseInicial.toUpperCase();
		//alert(`Frase mayuscula: ${fraseMayuscula}`);
		//saber el desplazamiento
		const desplazamiento=document.getElementById('desplazamiento').value;
		//alert(`desplazamiento: ${desplazamiento}`);
		//saber tamaño de la frase
		const largoFrase= fraseInicial.length;
		//alert(`largo de la frase ${largoFrase}`);
		//recorrer letra por letra 
		for (let i=0; i< largoFrase; i++) {
			let fraseANCIIDesplazado="";
			const fraseANCII=fraseMayuscula.charCodeAt(i);//transforma en ANCII
			if(fraseANCII[i]!=32){
				fraseANCIIDesplazado=((((fraseANCII-65)+parseInt(desplazamiento))%26)+65);
			}else if(fraseANCII[i]==32){
				fraseANCIIDesplazado=fraseANCII;
			}
			const fraseCifrada=String.fromCharCode(fraseANCIIDesplazado); 
		}
//		return fraseCifrada;
	}
	function descifrarFrase(){
		//saber la frase
		const fraseInicial= document.getElementById('frase').value;
		//alert(`Frase inicial: ${fraseInicial}`);
		//CONVERTIR FRASE EN MAYUSCULA
		const fraseMayuscula=fraseInicial.toUpperCase();
		//alert(`Frase mayuscula: ${fraseMayuscula}`);
		//saber el desplazamiento
		const desplazamiento=document.getElementById('desplazamiento').value;
		//alert(`desplazamiento: ${desplazamiento}`);
		//saber tamaño de la frase
		const largoFrase= fraseInicial.length;
		//alert(`largo de la frase ${largoFrase}`);
		//recorrer letra por letra 
		for (let i=0; i< largoFrase; i++) {
			let fraseANCIIDesplazado="";
			const fraseANCII=fraseMayuscula.charCodeAt(i);//transforma en ANCII
			if(fraseANCII[i]!=32){
				fraseANCIIDesplazado=((((fraseANCII-65)-parseInt(desplazamiento))%26)+65);
			}else if(fraseANCII[i]==32){
				fraseANCIIDesplazado=fraseANCII;
			}
			//const fraseANCIIDesplazado=((((fraseANCII-65)-parseInt(desplazamiento))%26)+65);
			const fraseDesifrada=String.fromCharCode(fraseANCIIDesplazado); 
		}
//		return fraseDesifrada;
	}	
	resultado.innerHTML = cifrarFrase();
	document.getElementById('cifrar').addEventListener('click', cifrarFrase);	
	document.getElementById('descifrar').addEventListener('click', descifrarFrase);	
