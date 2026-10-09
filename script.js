// Datos personalizados para la invitación de Mafe y Cristian.
const CONFIG = {
  date: "Sábado, 24 de octubre de 2026",
  time: "1:00 p. m.",
  place: "Cra. 5 #119-45 – Le Coco Café",
  parents: "Mafe y Cristian",
  // WhatsApp está pendiente. Cuando tengas el número, escríbelo con indicativo,
  // sin el signo +, espacios ni guiones. Ejemplo Colombia: 573001234567
  whatsapp: "573187733332",
  whatsappMessage: "¡Hola, Mafe y Cristian! Confirmo mi asistencia a la revelación de género."
};

document.querySelectorAll("[data-field]").forEach((element) => {
  const key = element.dataset.field;
  if (CONFIG[key]) element.textContent = CONFIG[key];
});

const rsvpButton = document.getElementById("rsvpButton");
const contactNote = document.getElementById("contactNote");
if (CONFIG.whatsapp.trim()) {
  rsvpButton.href = `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  rsvpButton.hidden = false;
  contactNote.hidden = true;
} else {
  rsvpButton.hidden = true;
  contactNote.hidden = false;
}

const eggButton = document.getElementById("eggButton");
const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");
const replayButton = document.getElementById("replayButton");
let opening = false;

function makeConfetti() {
  const container = document.querySelector(".confetti");
  const particles = document.querySelector(".magic-particles");
  container.innerHTML = "";
  particles.innerHTML = "";
  const colors = ["#dba4a7", "#9bbdce", "#d5b77e", "#e9d7c4", "#b8c6a7"];
  for (let i = 0; i < 58; i++) {
    const piece = document.createElement("span");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.65}s`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    container.appendChild(piece);
  }
  const glints = ["✦", "✧", "♡", "✦", "·", "✧", "♡", "✦", "·", "✧", "✦", "♡"];
  glints.forEach((symbol, index) => {
    const particle = document.createElement("span");
    particle.className = "magic-particle";
    particle.textContent = symbol;
    particle.style.setProperty("--x", `${(Math.random() * 220) - 110}px`);
    particle.style.setProperty("--y", `${(Math.random() * 220) - 110}px`);
    particle.style.setProperty("--delay", `${index * 45}ms`);
    particles.appendChild(particle);
  });
}
function openEgg() {
  if (opening) return;
  opening = true;
  eggButton.classList.add("crack-mode");
  document.querySelector(".intro").classList.add("opening-scene");
  makeConfetti();
  window.setTimeout(() => {
    intro.classList.add("hidden");
    invitation.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    opening = false;
  }, 1450);
}
function replay() {
  invitation.classList.add("hidden");
  intro.classList.remove("hidden");
  eggButton.classList.remove("crack-mode");
  document.querySelector(".intro").classList.remove("opening-scene");
  document.querySelector(".confetti").innerHTML = "";
  document.querySelector(".magic-particles").innerHTML = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
eggButton.addEventListener("click", openEgg);
replayButton.addEventListener("click", replay);
