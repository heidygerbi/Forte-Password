window.cipher = {
  encode:	function cifrarFrase(offset,string,esp,slash){
    const fraseMayuscula=string.toUpperCase();
    let fraseANCIIDesplazado=[];
		let fraseANCII=[];
    let fraseCifrada="";
    let clave="";
    const sustitutoEsp=parseInt(esp);
    const sustitutoSlash=parseInt(slash);
 		for (let i=0; i<fraseMayuscula.length; i++) {
      fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
			if(fraseANCII[i]>=65 && fraseANCII[i]<=90){
				fraseANCIIDesplazado[i]=(((fraseANCII[i]-65)+offset)%26)+65;
      }
      if(fraseANCII[i]===32){
        fraseANCIIDesplazado[i]=sustitutoEsp;
      }
      if(fraseANCII[i]===47){
        fraseANCIIDesplazado[i]=sustitutoSlash;
      }
			if(fraseANCII[i]>=48 && fraseANCII[i]<=57){
				fraseANCIIDesplazado[i]=(((fraseANCII[i]-48)+offset)%10)+48;
      }      
      fraseCifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 
      if(i%2===0){
  		 console.log(clave+=fraseCifrada[i].toUpperCase()); 
      }else if(i%2!==0){
        console.log(clave+=fraseCifrada[i].toLowerCase()); 
      }
     }
		return clave;
  },
  decode:function descifrarFrase(offset,string,esp,slash){
    const fraseMayuscula=string.toUpperCase();
    let fraseANCIIDesplazado=[];
		let fraseANCII=[];
    let fraseDescifrada="";
    let noClave="";
 		for (let i=0; i<fraseMayuscula.length; i++) {
      fraseANCII[i]=parseInt(fraseMayuscula.charCodeAt(i));//transforma en ANCII
			if(fraseANCII[i]>=65 && fraseANCII[i]<=90){
				fraseANCIIDesplazado[i]=(((fraseANCII[i]-90)-offset)%26)+90;
      }
      if(fraseANCII[i]===34 || fraseANCII[i]===46 || fraseANCII[i]===36 || fraseANCII[i]===38){
        fraseANCIIDesplazado[i]=32;
      }
      if(fraseANCII[i]===35 || fraseANCII[i]===95 || fraseANCII[i]===59 || fraseANCII[i]===58){
        fraseANCIIDesplazado[i]=47;
      }
			if(fraseANCII[i]>=48 && fraseANCII[i]<=57){
        let a=(fraseANCII[i]-57);
        fraseANCIIDesplazado[i]=(((fraseANCII[i]-57)-offset)%10)+57;
      }      
      fraseDescifrada+=String.fromCharCode(fraseANCIIDesplazado[i]); 
      if(i%2===0){
  		 console.log(noClave+=fraseDescifrada[i].toUpperCase()); 
      }else if(i%2!==0){
        console.log(noClave+=fraseDescifrada[i].toLowerCase()); 
      }
     }
		return noClave; 
  }
};