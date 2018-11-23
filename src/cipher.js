window.cipher = {

  encode:	function cifrarFrase(offset,string){
		const fraseMayuscula=string.toUpperCase();
		let fraseANCIIDesplazado=[];
		let fraseANCII=[];
		let fraseCifrada="";
		for (let i=0; i<fraseMayuscula.length; i++) {
			fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
			if((fraseANCII[i]>=65 && fraseANCII[i]<=90)||fraseANCII[i]===32){
				if(fraseANCII[i]!==32)fraseANCIIDesplazado[i]=(((fraseANCII[i]-65)+offset)%26)+65;
				else if(fraseANCII[i]===32)fraseANCIIDesplazado[i]=fraseANCII[i];
			}
			fraseCifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 
		}
		return fraseCifrada;
  },
  decode: function descifrarFrase(offset,string){
    const fraseMayuscula=string.toUpperCase();
    let fraseANCIIDesplazado=[];
    let fraseANCII=[];
    let fraseDescifrada="";
    for (let i=0; i<fraseMayuscula.length; i++) {
      fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
       if((fraseANCII[i]>=65 && fraseANCII[i]<=90)||fraseANCII[i]===32){
         if(fraseANCII[i]!==32)fraseANCIIDesplazado[i]=(((fraseANCII[i]-90)-offset)%26)+90;
         else if(fraseANCII[i]===32)fraseANCIIDesplazado[i]=fraseANCII[i];
      }

      fraseDescifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 
  
    }
    return fraseDescifrada;
  }
};
export default window.cipher;