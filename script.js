// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // 🌟 Header Hover Effect
  const headerTitle = document.querySelector(".header h1");
  headerTitle?.addEventListener("mouseover", () => headerTitle.style.color = "#00FFFF");
  headerTitle?.addEventListener("mouseout", () => headerTitle.style.color = "#FFD700");

  // ⏰ Dynamic Greeting Message based on time
  const greeting = document.createElement("p");
  const hour = new Date().getHours();
  greeting.innerText =
    hour < 12 ? "Good Morning! 🌞" :
    hour < 18 ? "Good Afternoon! 🌤️" :
    "Good Evening! 🌙";
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";
  greeting.style.marginTop = "10px";
  document.querySelector(".header")?.appendChild(greeting);

  // 📖 Read More / Less toggle (cuts cleanly at end of a sentence)
  const aboutText = document.querySelector("#home-about .text p");
  if (aboutText) {
    const fullText = aboutText.innerText.trim();
    const cut = fullText.indexOf(".", 200); // find first full stop after 200 chars
    const shortText = fullText.slice(0, cut + 1);
    aboutText.innerText = shortText;

    // Create Read More button
    const readBtn = document.createElement("button");
    readBtn.innerText = "Read More";
    readBtn.className = "read-toggle";
    aboutText.insertAdjacentElement("afterend", readBtn);

    // Toggle between full and short text
    readBtn.addEventListener("click", () => {
      if (readBtn.innerText === "Read More") {
        aboutText.innerText = fullText;
        readBtn.innerText = "Read Less";
      } else {
        aboutText.innerText = shortText;
        readBtn.innerText = "Read More";
      }
    });
  }

  // 🎯 Highlight skill item when clicked
  document.querySelectorAll(".skills ul li").forEach(skill => {
    skill.addEventListener("click", () => {
      skill.classList.toggle("highlighted");
    });
  });

  // 🧭 Smooth scrolling for internal navigation links
  document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 📅 Automatically update footer year
  const footerText = document.querySelector("footer p:last-child");
  if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML = `&copy; ${year} Kuenga Wangmo | All Rights Reserved`;
  }

  // 🌗 Dark / Light mode toggle (saved in localStorage)
  const themeButton = document.getElementById("themeToggle");
  const applyTheme = (theme) => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    themeButton.innerText = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", theme);
  };
  if (themeButton) {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
    themeButton.addEventListener("click", () => {
      const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  // 💬 Random Motivational Quote Generator
  const quotes = [
    "Believe you can and you're halfway there. 🌟",
    "Mistakes are proof you are trying. 💪",
    "Do something today that your future self will thank you for. 🌈",
    "Your only limit is your mind. 🚀",
    "Small steps every day lead to big changes. 🌱",
    "Dream big, work hard, stay humble. 💫",
    "Success comes from consistency, not luck. 🔥",
    "Keep going — you’re doing better than you think! 💖",
    "The future depends on what you do today. ⏳",
    "Stay positive, work hard, make it happen. 🌻"
  ];
  const quoteBtn = document.getElementById("quote-btn");
  const quoteDisplay = document.getElementById("quote-display");

  // Display random quote when button is clicked
  quoteBtn?.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerText = quotes[randomIndex];
    quoteDisplay.style.color = "#FFD700";
  });
});

