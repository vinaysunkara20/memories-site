function goToPage(page) {
  window.location.href = page;
}

window.onload = () => {
  const music = document.getElementById("bgMusic");

  if (music && sessionStorage.getItem("musicPlaying") === "true") {
    music.volume = 0.12;
    music.play().catch(() => {});
  }
};

function goToPage(page) {
  const music = document.getElementById("bgMusic");

  // if music not found, just navigate
  if (!music) {
    window.location.href = page;
    return;
  }

  let v = music.volume || 0.12;

  const fade = setInterval(() => {
    if (v > 0.01) {
      v -= 0.01;
      music.volume = v;
    } else {
      clearInterval(fade);

      music.pause();
      music.currentTime = 0; // 🔥 reset

      sessionStorage.removeItem("musicPlaying");

      window.location.href = page;
    }
  }, 100);
}