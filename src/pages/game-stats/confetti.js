const CONFETTI_COUNT = 150;
const COLORS = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', 
  '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', 
  '#009688', '#4caf50', '#8bc34a', '#cddc39', 
  '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
];

let canvas = null;
let context = null;
let confettiList = [];
let isConfettiActive = false;
let animationFrameId = null;
let lastTime = 0; // Tracks timestamp for delta time calculation

const handleResize = () => {
  if (!canvas || !context) return;
  
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);

  context.setTransform(dpr, 0, 0, dpr, 0, 0);
};

export const removeConfetti = () => {
  isConfettiActive = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('resize', handleResize);
  if (canvas && canvas.parentNode) {
    canvas.parentNode.removeChild(canvas);
  }
  canvas = null;
  context = null;
  confettiList = [];
  lastTime = 0;
};

export const addConfetti = (element) => {
  removeConfetti();

  isConfettiActive = true;
  canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';

  context = canvas.getContext('2d');
  element.appendChild(canvas);

  handleResize();
  window.addEventListener('resize', handleResize);

  createConfetti();
  
  // Start animation loop with timestamp initialization
  lastTime = performance.now();
  animationFrameId = window.requestAnimationFrame(animate);
};

function createConfetti() {
  confettiList = [];
  for (let i = 0; i < CONFETTI_COUNT; i++) {
    const piece = resetConfettiPiece({});
    // Distribute initial pieces vertically across window
    piece.y = Math.random() * window.innerHeight;
    confettiList.push(piece);
  }
}

function resetConfettiPiece(piece) {
  piece.x = Math.random() * window.innerWidth;
  piece.y = -Math.random() * 20 - 10;

  // Constant size in CSS logical pixels
  piece.width = Math.random() * 8 + 6;
  piece.height = Math.random() * 6 + 4;
  piece.color = COLORS[Math.floor(Math.random() * COLORS.length)];

  // SPEED DEFINITION (IN SECONDS):
  // Takes between 3.5 to 6.5 seconds to fall full screen height regardless of FPS/screen size
  piece.fallDurationSeconds = Math.random() * 3 + 3.5; 
  piece.driftPercentPerSecond = (Math.random() - 0.5) * 0.05;

  // 3D Fluttering & rotation (per second)
  piece.rotation = Math.random() * 360;
  piece.rotationSpeed = (Math.random() - 0.5) * 360; // Degrees per second
  piece.oscillation = Math.random() * Math.PI * 2;
  piece.oscillationSpeed = Math.random() * 3 + 1;  // Cycles per second

  return piece;
}

function animate(currentTime) {
  if (!isConfettiActive || !context || !canvas) return;

  // Calculate delta time in seconds (e.g., ~0.016s for 60fps, ~0.008s for 120fps)
  const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1); // Cap at 0.1s to avoid jumps on tab switch
  lastTime = currentTime;

  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  confettiList.forEach((piece) => {
    // Movement scaled strictly by delta time
    const vy = (window.innerHeight / piece.fallDurationSeconds) * deltaTime;
    const vx = (window.innerWidth * piece.driftPercentPerSecond) * deltaTime;

    piece.x += vx + Math.sin(piece.oscillation) * 0.5;
    piece.y += vy;

    // Flutter updates scaled by delta time
    piece.rotation += piece.rotationSpeed * deltaTime;
    piece.oscillation += piece.oscillationSpeed * deltaTime;

    // Draw using transformed context
    context.save();
    context.translate(piece.x, piece.y);
    context.rotate((piece.rotation * Math.PI) / 180);
    context.scale(Math.cos(piece.oscillation), 1);

    context.fillStyle = piece.color;
    context.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
    context.restore();

    // Recycle pieces when they cross the bottom
    if (piece.y > window.innerHeight + 20) {
      resetConfettiPiece(piece);
    }
  });

  animationFrameId = window.requestAnimationFrame(animate);
}