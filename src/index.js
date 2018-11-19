 const btnCifrar = document.getElementById('btn-cifrar');
 btnCifrar.addEventListener('click', () => {
	 	//saber la frase
	const fraseInicial= document.getElementById('frase').value;
	//alert(`Frase inicial: ${fraseInicial}`);

	//CONVERTIR FRASE EN MAYUSCULA
	const fraseMayuscula=fraseInicial.toUpperCase();
	//alert(`Frase mayuscula: ${fraseMayuscula}`);

	//saber el desplazamiento
	//const desplazamiento=parseInt(document.getElementById('desplazamiento').value);
	//alert(`desplazamiento: ${desplazamiento}`);
	resultado.innerHTML = cifrarFrase(fraseInicial);
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
	resultado.innerHTML = descifrarFrase(fraseInicial);
  }); 

//funcion para cifrar
	const cifrarFrase= (fraseMayuscula,desplazamiento)=>{
		const fraseCifrada=[];
		//recorrer letra por letra 
		for (let i=0; i< fraseMayuscula.length; i++) {
			let fraseANCIIDesplazado="";
			const fraseANCII=fraseMayuscula.charCodeAt(i);//transforma en ANCII
			console.log(fraseANCII);
			if(fraseANCII[i]!=32){
				console.log("no es espacio");
				if(fraseANCII[i]>64){
					console.log("esta en mayuscula");
					if(fraseANCII[i]<91){
						console.log("esta en mayuscula 2");
						fraseANCIIDesplazado=fraseANCII-65+desplazamiento%26+65;
					}
				}
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
		if(fraseANCII[i]!=32 && fraseANCII[i]>=65 && fraseANCII[i]<=90)fraseANCIIDesplazado=fraseANCII-65+desplazamiento%26+65;
		fraseDescifrada.push(String.fromCharCode(fraseANCIIDesplazado)); 
	}
	return fraseDescifrada.join("");
}