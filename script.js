const revealBtn = document.getElementById("revealBtn");
const surpriseSection = document.getElementById("surpriseSection");
const messageOutput = document.getElementById("messageOutput");
const gallery = document.getElementById("gallery");
const sparkleLayer = document.getElementById("sparkleLayer");

// Replace this with your exact personal message when you share it.
const birthdayMessage =
  "Hey Babe, first of all I want wish you a very Happy Birthday. You turn 25 today. You are really getting old now 😂😂. I hope you have a fabulous day. This day is important to me as it is to you because if it was'nt for this day you would not have come in my life. Thank you for always sticking by my side even at my lowest. I promise to stay with you for atleast 50 more birthdays 😂. Once again A Happy Birthday to you ❤️😘. I love you ❤️❤️❤️.";

// Replace these with your own photo file paths, for example: "images/photo1.jpg"
const photoUrls = [];

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

  setTimeout(() => {
    sparkle.remove();
  }, 7000);
}

function startSparkles() {
  setInterval(spawnSparkle, 230);
}

revealBtn.addEventListener("click", () => {
  surpriseSection.classList.remove("hidden");
  surpriseSection.classList.add("show");
  surpriseSection.setAttribute("aria-hidden", "false");

  revealBtn.textContent = "Surprise unlocked 💘";
  revealBtn.disabled = true;

  messageOutput.textContent = birthdayMessage;
  renderGallery();
});

startSparkles();
