const inputTexto = document.getElementById('texto');
const buttonCapicua = document.getElementById('resultado');
const parrafoMesagge = document.getElementById('mensaje');

function isCapicua(texto) {
 let newPalabra = '';
 for (let i = texto.length - 1; i >= 0; i--) {
  newPalabra = newPalabra.concat(texto[i])
 }
 if (texto === newPalabra) {
  return true
 } else {
  return false
 }
}


function manejadorClick() {
 const resultado = isCapicua(inputTexto.value)
 if (resultado) {
  parrafoMesagge.innerHTML = 'Soy capicua'
 } else {
  parrafoMesagge.innerHTML = 'No soy capicua'
 }
}

buttonCapicua.addEventListener('click', manejadorClick)