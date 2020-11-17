const car = document.getElementById("car");
const fire = document.getElementById("fire");
const score = document.getElementById("score");

// make jump animation
function jump() {
  car.classList.add("jump-animation");
  setTimeout(() =>
    car.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!car.classList.contains('jump-animation')) {
    jump();
  }
})

// get car and fire's data
setInterval(() => {
  const carTop = parseInt(window.getComputedStyle(car)
    .getPropertyValue('top'));
  const fireLeft = parseInt(window.getComputedStyle(fire)
    .getPropertyValue('left'));
  score.innerText++;

  //fire shows up
  if (fireLeft < 0) {
    fire.style.display = 'none';
  } else {
    fire.style.display = ''
  }

  //define when is losing
  if (fireLeft < 150 && fireLeft > 0 && carTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
