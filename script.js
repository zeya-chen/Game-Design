const car = document.getElementById('car');
const fire = document.getElementById('fire');
const score = document.getElementById('score');


// class Fire {
//   constructor(x=100, y=) {
//     this.width = 200;
//     this.height = 200;
//     this.x = x;
//     this.y = y;
//   }
// }

// make jump animation
function jump() {
  car.classList.add('jump-animation');
  setTimeout(() => car.classList.remove('jump-animation'), 500);
}

document.addEventListener('keypress', (event) => {
  if (!car.classList.contains('jump-animation')) {
    jump();
  }
});

// get car and fire's data
setInterval(() => {
  const carTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
  const fireLeft = parseInt(
    window.getComputedStyle(fire).getPropertyValue('left')
  );
  score.innerText++;

  //fire shows up
  if (fireLeft < 0) {
    fire.style.display = 'none';
  } else {
    fire.style.display = '';
  }

  //define when is losing
  if (fireLeft < 150 && fireLeft > 0 && carTop > 150) {
    console.log('You got a score of: ' + score.innerText + '\n\nPlay again?');
    //location.reload();
  }
}, 50);
