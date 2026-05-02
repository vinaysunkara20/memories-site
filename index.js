const lines = [
"From First Bench Silence 🤐",
"To Last Bench Memories 😄",
"44 Subjects…",
"17 Labs…",
"Countless Mids…",
"Endless Laughs…",
"Sleepless Nights 🌙",
"Last Minute Studies 📖",
"Proxy Attendance ✔️",
"Canteen Talks ☕",
"Bunked Classes 🚶‍♂️",
"Exam Hall Prayers 🙏",
"Result Day Heartbeats 💓",
"Small Fights… Big Bonds 🤝",
"And a Heart Full of Memories ❤️",
"That We’ll Carry Forever… 🥺",
"That Time Can’t Take Away… Ever 🕰️🥺"
];

let index = 0;

function openGift() {
  const music = document.getElementById("bgMusic");

  // 🎁 open lid animation
  document.querySelector(".lid").classList.add("open");

  // 🎵 start music
  music.volume = 0;
  music.play();

  // 🎬 smooth fade-in
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.12) {
      v += 0.01;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 120);

  // 🔥 store state
  sessionStorage.setItem("musicPlaying", "true");

  // ⏳ after animation
  setTimeout(() => {
    document.querySelector(".gift-container").style.display = "none";
    document.getElementById("story").classList.remove("hidden");

    showLine();
  }, 1200);
}

function showLine() {
  if (index < lines.length) {
    document.getElementById("text").innerHTML = lines[index];
    index++;
    setTimeout(showLine, 1200);
  } else {
    const btn = document.getElementById("nextBtn");
    btn.classList.remove("btn-hidden");
    btn.style.display = "inline-block";
  }
}
function goToMemories() {
  window.location.href = "memories.html";
}

function checkPassword() {
  const input = document.getElementById("passInput").value;

  if (input === "Batch 22-26") {  // 🔥 change password
    document.getElementById("lockScreen").style.display = "none";
  } else {
    alert("Wrong password ❌");
  }
}