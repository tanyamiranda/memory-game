const THICKNESS = 1;
const max_fireworks = 2;
const max_sparks = 50;

let canvas = null;
let context = null;
let fireworks = [];
let isFireworksActive = false;

export const removeFireworks = () => {
  isFireworksActive = false;
  canvas = null;
  context = null;
  fireworks = [];
}

export const addFireworks = (element) => {

  isFireworksActive = true;
  canvas = document.createElement('canvas');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.id = 'fireworks-canvas';
  context = canvas.getContext('2d');

  element.appendChild(canvas);
  setOffFireworks();
}

function setOffFireworks () {
  
  for (let i = 0; i < max_fireworks; i++) {
    let firework = {
      sparks: []
    };
    for (let n = 0; n < max_sparks; n++) {
      let spark = {
        vx: Math.random() * 5 + .5,
        vy: Math.random() * 5 + .5,
        weight: Math.random() * .3 + .03,
        red: Math.floor(Math.random() * 2),
        green: Math.floor(Math.random() * 2),
        blue: Math.floor(Math.random() * 2)
      };
      if (Math.random() > .5) spark.vx = -spark.vx;
      if (Math.random() > .5) spark.vy = -spark.vy;
      firework.sparks.push(spark);
    }
    fireworks.push(firework);
    resetFirework(canvas,firework);
  }
  window.requestAnimationFrame(explode);
}  


function resetFirework(canvas, firework) {
  firework.x = Math.floor(Math.random() * canvas.width);
  firework.y = canvas.height;
  firework.age = 0;
  firework.phase = 'fly';
}

 
function explode() {
 
  if(!isFireworksActive)
    return;

  context.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((firework,index) => {
    if (firework.phase === 'explode') {
        firework.sparks.forEach((spark) => {
        for (let i = 0; i < 10; i++) {
          let trailAge = firework.age + i;
          let x = firework.x + spark.vx * trailAge;
          let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
          let fade = i * 20 - firework.age * 2;
          let r = Math.floor(spark.red * fade);
          let g = Math.floor(spark.green * fade);
          let b = Math.floor(spark.blue * fade);
          context.beginPath();
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
          context.rect(x, y, THICKNESS, THICKNESS);
          context.fill();
        }
      });
      firework.age++;
      if (firework.age > 100 && Math.random() < .05) {
        resetFirework(canvas,firework);
      }
    } else {
      firework.y = firework.y - 10;
      for (let spark = 0; spark < 15; spark++) {
        context.beginPath();
        context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
        context.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, THICKNESS, THICKNESS);
        context.fill();
      }
      if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
    }
  });

  window.requestAnimationFrame(explode);
}
