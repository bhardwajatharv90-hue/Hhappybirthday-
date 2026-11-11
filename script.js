const cake = document.getElementById('cake');
const wishBtn = document.getElementById('wishBtn');
const cutBtn = document.getElementById('cutBtn');
const cakeHint = document.getElementById('cakeHint');
const cutMessage = document.getElementById('cutMessage');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function confetti(count = 75) {
  const colors = ['#f3a9ca','#ffe5a8','#c5b5ff','#fff7f0','#e88bad'];
  for (let i = 0; i < count; i++) {
    const bit = document.createElement('i');
    bit.className = 'confetti';
    bit.style.left = Math.random() * 100 + 'vw';
    bit.style.background = colors[Math.floor(Math.random() * colors.length)];
    bit.style.animationDuration = (2.2 + Math.random() * 2.5) + 's';
    bit.style.animationDelay = Math.random() * .5 + 's';
    bit.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
    document.body.appendChild(bit);
    setTimeout(() => bit.remove(), 5200);
  }
}
function makeWish() {
  cake.classList.add('blown');
  cakeHint.textContent = 'Wish made! May it find its way to you. 💫';
  showToast('A wish has been sent to the universe ✨');
  confetti(35);
}
wishBtn.addEventListener('click', makeWish);
cake.addEventListener('click', makeWish);
cutBtn.addEventListener('click', () => {
  cake.classList.add('cut');
  cutMessage.textContent = 'A sweet slice of happiness, just for you! 🍰';
  confetti(100);
  showToast('Cake cut! Let the celebrations begin 🎉');
  setTimeout(() => cake.classList.remove('cut'), 900);
});
document.getElementById('openSurprise').addEventListener('click', () => {
  document.getElementById('wishes').scrollIntoView({behavior:'smooth'});
  confetti(45);
});
document.getElementById('celebrateBtn').addEventListener('click', () => {
  confetti(140);
  showToast('Sending you a sky full of good wishes 💗');
});
