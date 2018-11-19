 const btnCifrar = document.getElementById('btn-cifrar');
 btnCifrar.addEventListener('click', () => {
	 	//saber la frase
	const fraseInicial= document.getElementById('frase').value;
	//alert(`Frase inicial: ${fraseInicial}`);

	//CONVERTIR FRASE EN MAYUSCULA
	const fraseMayuscula=fraseInicial.toUpperCase();
	//alert(`Frase mayuscula: ${fraseMayuscula}`);

	//saber el desplazamiento
	const desplazamiento=parseInt(document.getElementById('desplazamiento').value);
	//alert(`desplazamiento: ${desplazamiento}`);
	resultado.innerHTML = cifrarFrase(fraseInicial, desplazamiento);
  });

  const btnDescifrar = document.getElementById('btn-descifrar');
 btnDescifrar.addEventListener('click', () => {
	 	//saber la frase
	const fraseInicial= document.getElementById('frase').value;
	//alert(`Frase inicial: ${fraseInicial}`);

	//CONVERTIR FRASE EN MAYUSCULA
	const fraseMayuscula=fraseInicial.toUpperCase();
	//alert(`Frase mayuscula: ${fraseMayuscula}`);

	//saber el desplazamiento
	const desplazamiento=parseInt(document.getElementById('desplazamiento').value);
	//alert(`desplazamiento: ${desplazamiento}`);
	resultado.innerHTML = descifrarFrase(fraseInicial, desplazamiento);
  }); 

//funcion para cifrar
	const cifrarFrase= (fraseMayuscula,desplazamiento)=>{
		const fraseCifrada=[];
		//recorrer letra por letra 
		for (let i=0; i< fraseMayuscula.length; i++) {
			let fraseANCIIDesplazado="";
			const fraseANCII=fraseMayuscula.charCodeAt(i);//transforma en ANCII
			if(fraseANCII[i]!=32){
				fraseANCIIDesplazado=((((fraseANCII-65)+desplazamiento)%26)+65);
			}
			fraseCifrada.push(String.fromCharCode(fraseANCIIDesplazado)); 
		}
		return fraseCifrada.join("");
	}
//funcion para descifrar
const descifrarFrase= (fraseMayuscula,desplazamiento)=>{
	const fraseDescifrada=[];
	//recorrer letra por letra 
	for (let i=0; i< fraseMayuscula.length; i++) {
		let fraseANCIIDesplazado="";
		const fraseANCII=fraseMayuscula.charCodeAt(i);//transforma en ANCII
		if(fraseANCII[i]!=32){
			fraseANCIIDesplazado=((((fraseANCII-65)-desplazamiento)%26)+65);
		}
		fraseDescifrada.push(String.fromCharCode(fraseANCIIDesplazado)); 
	}
	return fraseDescifrada.join("");
}