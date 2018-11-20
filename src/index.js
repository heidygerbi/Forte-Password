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
		//recorrer letra por letra 
		for (let i=0; i<fraseMayuscula.length; i++) {
			fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
			if(fraseANCII[i]!==32 && fraseANCII[i]>=65 && fraseANCII[i]<=90)fraseANCIIDesplazado[i]=(((fraseANCII[i]-65)+desplazamiento)%26)+65;
			fraseCifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 
		}
		//console.log(fraseCifrada);
		return fraseCifrada;
	}
//funcion para descifrar
const descifrarFrase= (fraseInicial,desplazamiento)=>{
	const fraseMayuscula=fraseInicial.toUpperCase();
	let fraseANCIIDesplazado=[];
	let fraseANCII=[];
	let fraseDescifrada="";
	//recorrer letra por letra 
	for (let i=0; i<fraseMayuscula.length; i++) {
		fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
		/*if(fraseANCII[i]!==32 && fraseANCII[i]>=65 && fraseANCII[i]<=90){
			let a=(fraseANCII[i]-65);
			console.log(a);
			let b=(a-desplazamiento);
			console.log(b);
			let c=(b%26);
			console.log(c);
			let d=c+65;
			console.log(d);
			fraseANCIIDesplazado[i]=d;
		}*/
		if(fraseANCII[i]!==32 && fraseANCII[i]>=65 && fraseANCII[i]<=90)fraseANCIIDesplazado[i]=(((fraseANCII[i]-65)+desplazamiento)%26)+65;
		fraseDescifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 

	}
	//console.log(fraseDescifrada);
	return fraseDescifrada;
}