const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

// Adjust canvas to fit the window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const particles = [];
const colors = ["#ff6f61", "#fbc531", "#74b9ff", "#81ecec", "#ffeaa7"];

// Create particle object
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.velocityX = (Math.random() - 0.5) * 2;
    this.velocityY = (Math.random() - 0.5) * 2;
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Keep particles inside the screen
    if (this.x < 0 || this.x > canvas.width) this.velocityX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.velocityY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

// Initialize particles
function initParticles() {
  particles.length = 0; // Clear previous particles
  const particleCount = Math.floor(canvas.width / 10);

  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}
initParticles();

// Animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

// Navigate to 'firstpage.html' on button click
function navigateToNext() {
  window.location.href = "firstpage.html"; // Redirect to firstpage.html
}
