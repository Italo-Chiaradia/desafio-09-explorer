// variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const closedCookie = document.querySelector('.closedCookie');
const resetBtn = document.querySelector('.resetBtn');
const msg = document.querySelector('.msg p');
const phrases = [
  "É em meio a dificuldade que se encontra a oportunidade",
  "O êxito é ir de frustração a frustração sem perder a animação",
  
];

closedCookie.addEventListener('click', () => {
  toggleScreen();

  let newPhrase = generateRandomNewItem(phrases, msg.innerText);
  msg.innerText = newPhrase;
});
resetBtn.addEventListener('click', () => {
  toggleScreen();
})
document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen();
  }
}) 

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
function generateRandomNewItem(array, current) {
  let index = Math.floor(Math.random() * array.length);

  while (array[index] == current) {
    index = Math.floor(Math.random() * array.length);
  }

  return array[index];
}