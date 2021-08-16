const randomNumber = Math.floor(Math.random() * 100 + 1);

function processInput() {
  const number = document.getElementById('myNumber').value;
  const out = document.getElementById('out');

  if (number == randomNumber) {
    out.innerHTML = 'Вы угадали';
    out.style.backgroundColor = 'green';
  } else if (number > randomNumber) {
    out.innerHTML = 'Вы ввели число больше чем нужно';
    out.style.backgroundColor = 'yellow';
  } else {
    out.innerHTML = 'Вы ввели число меньше чем нужно';
    out.style.backgroundColor = 'gray';
  }
}
