const ver = document.getElementById('ver');
ver.addEventListener('click', () => {
   let fraseInicial= document.getElementById('frase').value;
 });

   const capicua= (fraseInicial)=>{
       const fraseCapitua=[];
       for (let i=fraseInicial.length-1; i>=0; i--)fraseCapitua+=fraseInicial[i]; 
       if(fraseCapitua===fraseInicial) return true;
       else return false;
   }