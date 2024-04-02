const title = document.getElementById('changing-title');

const colors = [
  'text-primary',
  'text-secondary',
  'text-success',
  'text-danger',
  'text-warning',
  'text-info',
  'text-dark',
  'text-muted',
];

function changeColor() {
  console.log(title);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  title.classList.remove(...colors);
  title.classList.add(randomColor);
}

// Define um intervalo para mudar a cor a cada 3 segundos (3000 milissegundos)
setInterval(changeColor, 500);
