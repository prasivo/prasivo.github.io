// MENU BUTTON
document.querySelector(".nav-btn").addEventListener("click", () => {
  alert("Menu coming soon: Notes, AI Tools, Founder, Contact");
});

// SEARCH FUNCTION
const searchInput = document.querySelector(".search-section input");
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    alert("Searching for: " + searchInput.value);
  }
});

// LANGUAGE SWITCH (BASIC)
const langSelect = document.querySelector(".lang-select");
langSelect.addEventListener("change", function () {
  alert("Language switched to: " + this.value);
});

// START LEARNING BUTTON
document.querySelector(".primary-btn").addEventListener("click", () => {
  window.location.href = "notes.html";
});
