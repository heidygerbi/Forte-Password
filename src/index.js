const btnCifrar = document.getElementById('btn-cifrar');
 btnCifrar.addEventListener('click', () => {
	const fraseInicial= document.getElementById('frase').value;
	const desplazamiento=parseInt(document.getElementById('desplazamiento').value);
	resultado.innerHTML = cifrarFrase(fraseInicial,desplazamiento);
  });

  const btnDescifrar = document.getElementById('btn-descifrar');
 btnDescifrar.addEventListener('click', () => {
	const fraseInicial= document.getElementById('frase').value;
	const desplazamiento=parseInt(document.getElementById('desplazamiento').value);
	resultado.innerHTML = descifrarFrase(fraseInicial,desplazamiento);
  }); 

//funcion para cifrar
	const cifrarFrase= (fraseInicial,desplazamiento)=>{
		const fraseMayuscula=fraseInicial.toUpperCase();
		let fraseANCIIDesplazado=[];
		let fraseANCII=[];
		let fraseCifrada="";
		for (let i=0; i<fraseMayuscula.length; i++) {
			fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
			if((fraseANCII[i]>=65 && fraseANCII[i]<=90)||fraseANCII[i]===32){
				if(fraseANCII[i]!==32)fraseANCIIDesplazado[i]=(((fraseANCII[i]-65)+desplazamiento)%26)+65;
				else if(fraseANCII[i]===32)fraseANCIIDesplazado[i]=fraseANCII[i];
			}
			fraseCifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 
		}
		return fraseCifrada;
	}
//funcion para descifrar
const descifrarFrase= (fraseInicial,desplazamiento)=>{
	const fraseMayuscula=fraseInicial.toUpperCase();
	let fraseANCIIDesplazado=[];
	let fraseANCII=[];
	let fraseDescifrada="";
	for (let i=0; i<fraseMayuscula.length; i++) {
		fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
 		if((fraseANCII[i]>=65 && fraseANCII[i]<=90)||fraseANCII[i]===32){
			 if(fraseANCII[i]!==32)fraseANCIIDesplazado[i]=(((fraseANCII[i]-90)-desplazamiento)%26)+90;
			 else if(fraseANCII[i]===32)fraseANCIIDesplazado[i]=fraseANCII[i];
		}
		fraseDescifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 

	}
	return fraseDescifrada;
}