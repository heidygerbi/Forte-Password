const sumResponse = document.getElementById('sum-response');
const btnResponse = document.getElementById('btn-response');

const sum = (num1, num2) => {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);

  return number1 + number2;
};

btnResponse.addEventListener('click', () => {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  sumResponse.innerHTML = sum(num1, num2);
});

const phraseToVowels = (text) => {
  for (let i = 0; i < text.length; i++) {
    return text[i];
  }
};

 const btnText = document.getElementById('btn-text');
 const letter = document.getElementById('letter');

 btnText.addEventListener('click', () => {
   const textName = document.getElementById('text-name').value;
   letter.innerHTML = phraseToVowels(textName);
 });

 // ... continúa lo que falta