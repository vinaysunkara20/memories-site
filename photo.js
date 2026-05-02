const gallery = document.getElementById("gallery");

const totalImages = 447;

// 🔥 create images
for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement("img");

  img.src = `img1 (${i}).jpg`;

  // ✅ lazy loading
  img.loading = "lazy";
  img.decoding = "async";

  gallery.appendChild(img);
}

// 🎬 animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

// observe all images AFTER creation
document.querySelectorAll(".gallery img").forEach(img => {
  observer.observe(img);
});

img.classList.add("show");

/* 🔍 VIEWER */
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeBtn");

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    viewer.style.display = "flex";
    viewerImg.src = e.target.src;
  }
});

closeBtn.onclick = () => viewer.style.display = "none";

viewer.onclick = (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
  }
};

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeBtn");

let currentIndex = 0;

// click image (works for all 447 images)
document.querySelector(".gallery").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const images = document.querySelectorAll(".gallery img");

    currentIndex = Array.from(images).indexOf(e.target);
    viewer.style.display = "flex";
    viewerImg.src = e.target.src;
  }
});

// close
closeBtn.onclick = () => viewer.style.display = "none";

// next
function nextImg() {
  const images = document.querySelectorAll(".gallery img");
  currentIndex = (currentIndex + 1) % images.length;
  viewerImg.src = images[currentIndex].src;
}

// prev
function prevImg() {
  const images = document.querySelectorAll(".gallery img");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  viewerImg.src = images[currentIndex].src;
}
