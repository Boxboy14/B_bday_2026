const birthdayMessage =
  "Hey Babe, first of all I want wish you a very Happy Birthday. You turn 25 today. You are really getting old now 😂😂. I hope you have a fabulous day. This day is important to me as it is to you because if it was'nt for this day you would not have been in my life. Thank you for always sticking by my side even at my lowest. I promise to stay with you for atleast 50 more birthdays 😂. Once again A Happy Birthday to you ❤️😘. I love you ❤️❤️❤️.";

// Replace these with your own photo file paths, for example: "images/photo1.jpg"
const photoUrls = [];

const revealBtn = document.getElementById("revealBtn");
const cakePageBtn = document.getElementById("cakePageBtn");
const cutCakeBtn = document.getElementById("cutCakeBtn");

const heroView = document.getElementById("heroView");
const surpriseView = document.getElementById("surpriseView");
const cakeView = document.getElementById("cakeView");

const messageOutput = document.getElementById("messageOutput");
const gallery = document.getElementById("gallery");
const cakeNote = document.getElementById("cakeNote");
const flame = document.getElementById("flame");

const sparkleLayer = document.getElementById("sparkleLayer");
const confettiLayer = document.getElementById("confettiLayer");

function showOnly(viewElement) {
  [heroView, surpriseView, cakeView].forEach((section) => {
    const isActive = section === viewElement;
    section.classList.toggle("hidden", !isActive);
    section.setAttribute("aria-hidden", String(!isActive));
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}

function createPhotoCard(src) {
  const card = document.createElement("div");
  card.className = "photo-card";

  if (!src) {
    card.classList.add("photo-placeholder");
    card.textContent = "Add your couple photo here 💞";
    return card;
  }

  const img = document.createElement("img");
  img.src = src;
  img.alt = "Memory with Bhakti";
  card.appendChild(img);
  return card;
}

function renderGallery() {
  gallery.innerHTML = "";

  if (photoUrls.length === 0) {
    for (let i = 0; i < 6; i += 1) {
      gallery.appendChild(createPhotoCard(""));
    }
    return;
  }

  photoUrls.forEach((url) => {
    gallery.appendChild(createPhotoCard(url));
  });
}

function spawnSparkle() {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = ["✨", "💖", "🎉", "🌸", "💫"][Math.floor(Math.random() * 5)];
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.bottom = "-24px";
  sparkle.style.animationDuration = `${3 + Math.random() * 4}s`;

  sparkleLayer.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 7000);
}

function startSparkles() {
  setInterval(spawnSparkle, 230);
}

function spawnConfettiBurst(count) {
  const colors = ["#ff5ab7", "#ffd24a", "#6df2ff", "#b98cff", "#9eff85", "#ff8e66"];

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

revealBtn.addEventListener("click", () => {
  messageOutput.textContent = birthdayMessage;
  renderGallery();
  showOnly(surpriseView);
});

cakePageBtn.addEventListener("click", () => {
  showOnly(cakeView);
});

cutCakeBtn.addEventListener("click", () => {
  cutCakeBtn.disabled = true;
  cutCakeBtn.textContent = "Cake cut! 🎉";
  flame.classList.add("hidden");
  cakeNote.classList.remove("hidden");

  spawnConfettiBurst(140);
  const confettiTimer = setInterval(() => {
    spawnConfettiBurst(36);
  }, 550);

  setTimeout(() => {
    clearInterval(confettiTimer);
  }, 4200);
});

startSparkles();
