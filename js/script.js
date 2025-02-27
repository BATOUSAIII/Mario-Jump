const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let contador = 0;

const jump = () => {
  mario.classList.add('jump');
  contador++; // Incrementa o contador de pulos
  contadorElement.textContent = contador; // Atualiza o valor do contador

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './imagens/game-over.png';
    mario.style.width = '80px';
    mario.style.marginLeft = '40px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);

const contadorElement = document.getElementById("contador");

// Atualiza o valor inicial do contador
contadorElement.textContent = contador;
