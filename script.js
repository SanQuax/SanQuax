document.addEventListener("DOMContentLoaded", () => {

  const welcomeText = "Selamat Datang";
  const subText = "di Website Kelas XII AE";

  const welcomeEl = document.getElementById("welcome");
  const subEl = document.getElementById("subwelcome");

  let i = 0;
  let j = 0;

  function typeWelcome() {
    if (i < welcomeText.length) {
      welcomeEl.textContent += welcomeText.charAt(i);
      i++;
      setTimeout(typeWelcome, 100);
    } else {
      setTimeout(typeSub, 400);
    }
  }

  function typeSub() {
    if (j < subText.length) {
      subEl.textContent += subText.charAt(j);
      j++;
      setTimeout(typeSub, 80);
    }
  }

  typeWelcome();
});

document.addEventListener("DOMContentLoaded",() => {
    const jadwal = document.querySelector(".fade-jadwal");

    setTimeout(() => {
        jadwal.classList.add("show");
    },600);
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = 
    document.querySelectorAll(".content, .card, table");

    elements.forEach((el, i) => {
      el.classList.add("fade-up");
      setTimeout(() => {
        el.classList.add("show");
      }, i * 120);
    });
  });

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(
  ".fade-jadwal, .fade-galeri, .fade-footer"
).forEach(el => observer.observe(el));

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function showImage(index, direction) {
  modalImg.classList.remove("slide-next", "slide-prev");
  void modalImg.offsetWidth; // reset animasi

  modalImg.src = images[index].src;

  if (direction === "next") {
    modalImg.classList.add("slide-next");
  } else {
    modalImg.classList.add("slide-prev");
  }
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    currentIndex = index;
    showImage(currentIndex, "next");
  });
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex, "next");
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex, "prev");
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});