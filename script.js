/* ===== LANGUAGE DATA ===== */
const translations = {
  nav_home: {
    en: "Home",
    hi: "होम",
    hinglish: "Home"
  },
  nav_notes: {
    en: "Notes",
    hi: "नोट्स",
    hinglish: "Notes"
  },
  nav_ai: {
    en: "AI Tools",
    hi: "एआई टूल्स",
    hinglish: "AI Tools"
  },
  nav_about: {
    en: "About",
    hi: "परिचय",
    hinglish: "About"
  },
  hero_title: {
    en: "Learn Smarter with Free Notes and AI Tools",
    hi: "मुफ़्त नोट्स और AI टूल्स के साथ स्मार्ट तरीके से सीखें",
    hinglish: "Free notes aur AI tools ke saath smart learning"
  },
  hero_desc: {
    en: "Access free notes and use smart AI tools to understand concepts better and faster.",
    hi: "मुफ़्त नोट्स और स्मार्ट AI टूल्स से कॉन्सेप्ट्स को बेहतर और तेज़ समझें।",
    hinglish: "Free notes aur smart AI tools se concepts easily samjho"
  }
};

/* ===== LANGUAGE SWITCH ===== */
const langSelect = document.querySelector(".lang-select");

if (langSelect) {
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value.toLowerCase();

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[key] && translations[key][lang]) {
        el.innerText = translations[key][lang];
      }
    });
  });
}
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
  }
// ===== HOME SEARCH (SEARCH NOTES FROM HOME) =====
const homeSearch = document.getElementById("homeSearch");
const searchResults = document.getElementById("searchResults");

const subjects = [
  { name: "Human Anatomy and Physiology", url: "anatomy.html", keys: "anatomy physiology human body" },
  { name: "Pharmaceutics", url: "pharmaceutics.html", keys: "pharmaceutics dosage formulation" },
  { name: "Pharmaceutical Inorganic Chemistry", url: "inorganic-chemistry.html", keys: "inorganic chemistry pharmaceutical" },
  { name: "Pharmaceutical Analysis", url: "pharmaceutical-analysis.html", keys: "analysis pharmaceutical" },
  { name: "Remedial Mathematics", url: "remedial-mathematics.html", keys: "math mathematics remedial" },
  { name: "Skill Development", url: "skill-development.html", keys: "skill development communication" }
];

if (homeSearch && searchResults) {
  homeSearch.addEventListener("input", () => {
    const q = homeSearch.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (!q) return;

    subjects.forEach(sub => {
      const hay = (sub.name + " " + sub.keys).toLowerCase();
      if (hay.includes(q)) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${sub.url}">${sub.name}</a>`;
        searchResults.appendChild(li);
      }
    });
  });
  }
// ===== HAMBURGER MENU TOGGLE =====
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (!menu) return;

  menu.classList.toggle("active");
  document.body.style.overflow =
    menu.classList.contains("active") ? "hidden" : "auto";
}

document.addEventListener("click", (e) => {
  const menu = document.getElementById("sideMenu");
  const icon = document.querySelector(".menu-icon");
  if (!menu || !icon) return;

  if (
    menu.classList.contains("active") &&
    !menu.contains(e.target) &&
    !icon.contains(e.target)
  ) {
    menu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
// Auto close menu on side click
document.querySelectorAll("#sideMenu a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("sideMenu");
    if (menu) menu.classList.remove("active");
  });
});
// Close menu on outside click
document.addEventListener("click", (e) => {
  const menu = document.getElementById("sideMenu");
  const icon = document.querySelector(".menu-icon");
  if (!menu || !icon) return;
  
  if (menu.classList.contains("active") &&
      !menu.contains(e.target) &&
      !icon.contains(e.target)) {
    menu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
<script src="app.js"></script>
<script src="script.js"></script>
</body>
</html>
