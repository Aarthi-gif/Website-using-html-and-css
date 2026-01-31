/* ================= AI CHAT ================= */
function toggleAIChatBox() {
  const box = document.getElementById("aiChatBox");
  if (!box) return;
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function sendAIChat() {
  const input = document.getElementById("aiChatInput");
  const body = document.getElementById("aiChatBoxBody");
  if (!input || !body) return;

  const msg = input.value.trim();
  if (!msg) return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-user";
  userMsg.innerHTML = `<span>${msg}</span>`;
  body.appendChild(userMsg);

  input.value = "";
  body.scrollTop = body.scrollHeight;

  // Simulated AI reply
  setTimeout(() => {
    const aiMsg = document.createElement("div");
    aiMsg.className = "chat-ai";
    aiMsg.innerHTML = `<span>I am an AI assistant. I will get back to you soon!</span>`;
    body.appendChild(aiMsg);
    body.scrollTop = body.scrollHeight;
  }, 800);
}

/* ================= HERO SLIDESHOW ================= */
/* ================= HERO SLIDESHOW ================= */
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove("active");
    slide.style.animation = "none"; // reset animation
    slide.offsetHeight; // force reflow
  });

  slides[index].classList.add("active");
}

if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3500);
}
/* ================= BACK TO TOP BUTTON ================= */

