const gallery = document.getElementById("gallery");

const totalImages = 447;


  const img = document.createElement("img");

  img.src = `img1 (${i}).jpg`;
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

// observe all images
document.querySelectorAll(".gallery img").forEach(img => {
  observer.observe(img);
});

/* 🔍 VIEWER */
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeBtn");

let currentIndex = 0;

// click image (works for all images)
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const images = document.querySelectorAll(".gallery img");

    currentIndex = Array.from(images).indexOf(e.target);
    viewer.style.display = "flex";
    viewerImg.src = e.target.src;
  }
});

// close viewer
closeBtn.onclick = () => {
  viewer.style.display = "none";
};

// click outside to close
viewer.onclick = (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
  }
};

// next image
function nextImg() {
  const images = document.querySelectorAll(".gallery img");
  currentIndex = (currentIndex + 1) % images.length;
  viewerImg.src = images[currentIndex].src;
}

// previous image
function prevImg() {
  const images = document.querySelectorAll(".gallery img");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  viewerImg.src = images[currentIndex].src;
}
