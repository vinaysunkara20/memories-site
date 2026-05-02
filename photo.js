const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeBtn");

let currentIndex = 0;

// CLICK IMAGE
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const images = document.querySelectorAll("#gallery img");

    currentIndex = Array.from(images).indexOf(e.target);
    viewer.style.display = "flex";
    viewerImg.src = e.target.src;
  }
});

// CLOSE
closeBtn.onclick = () => {
  viewer.style.display = "none";
};

// CLICK OUTSIDE
viewer.onclick = (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
  }
};

// NEXT
function nextImg() {
  const images = document.querySelectorAll("#gallery img");
  currentIndex = (currentIndex + 1) % images.length;
  viewerImg.src = images[currentIndex].src;
}

// PREV
function prevImg() {
  const images = document.querySelectorAll("#gallery img");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  viewerImg.src = images[currentIndex].src;
}
