//import window.cipher from 'cipher.js';
//import window.cipher from 'cipher.js';
const btnCifrar = document.getElementById('btn-cifrar');
 btnCifrar.addEventListener('click', () => {
	const string= document.getElementById('frase').value;
	const offset=parseInt(document.getElementById('desplazamiento').value);
	//alert(cifrarFrase(string,offset));
//	resultado.innerHTML = cipher.encode(offset,string);
	resultado.innerHTML = cifrarFrase(string,offset);
});

 const btnDescifrar = document.getElementById('btn-descifrar');
 btnDescifrar.addEventListener('click', () => {
	const string= document.getElementById('frase').value;
	const offset=parseInt(document.getElementById('desplazamiento').value);
//	resultado.innerHTML = cipher.decode(offset,string);
	resultado.innerHTML=descifrarFrase(string,offset);
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