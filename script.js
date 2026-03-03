const birthdayMessage =
  "Hey Babe, first of I want wish you a very Happy Birthday. You turn 25 today. You are really getting old now 😂😂. I hope you have a fabulous day. This day is important to me as it is to you because if it was'nt for this day you would have not come in my life. Thank you for always sticking by my side even at my lowest. I promise to stay with you for atleast 50 more birthdays 😂. Once again A Happy Birthday to you ❤️😘. I love you ❤️❤️❤️.";

// Replace these with your own photo file paths, for example: "images/photo1.jpg"
const photoUrls = [];

const sparkleLayer = document.getElementById("sparkleLayer");
const revealBtn = document.getElementById("revealBtn");
const messageOutput = document.getElementById("messageOutput");
const gallery = document.getElementById("gallery");
const cakePageBtn = document.getElementById("cakePageBtn");
const cutCakeBtn = document.getElementById("cutCakeBtn");
const cakeNote = document.getElementById("cakeNote");
const flame = document.getElementById("flame");
const confettiLayer = document.getElementById("confettiLayer");

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
  if (!gallery) {
    return;
  }

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
  if (!sparkleLayer) {
    return;
  }

  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = ["✨", "💖", "🎉", "🌸", "💫"][Math.floor(Math.random() * 5)];
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.bottom = "-24px";
  sparkle.style.animationDuration = `${3 + Math.random() * 4}s`;

  sparkleLayer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 7000);
}

function startSparkles() {
  if (!sparkleLayer) {
    return;
  }

  setInterval(spawnSparkle, 230);
}

function spawnConfettiBurst(count) {
  if (!confettiLayer) {
    return;
  }

  const colors = ["#ff5ab7", "#ffd24a", "#6df2ff", "#b98cff", "#9eff85", "#ff8e66"];

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiLayer.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}

if (revealBtn) {
  revealBtn.addEventListener("click", () => {
    window.location.href = "surprise.html";
  });
}

if (messageOutput) {
  messageOutput.textContent = birthdayMessage;
  renderGallery();
}

if (cakePageBtn) {
  cakePageBtn.addEventListener("click", () => {
    window.location.href = "cake.html";
  });
}

if (cutCakeBtn) {
  cutCakeBtn.addEventListener("click", () => {
    cutCakeBtn.disabled = true;
    cutCakeBtn.textContent = "Cake cut! 🎉";
    if (flame) {
      flame.classList.add("hidden");
    }
    if (cakeNote) {
      cakeNote.classList.remove("hidden");
    }

    spawnConfettiBurst(140);
    const confettiTimer = setInterval(() => {
      spawnConfettiBurst(36);
    }, 550);

    setTimeout(() => {
      clearInterval(confettiTimer);
    }, 4200);
  });
}

startSparkles();
