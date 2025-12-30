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
#searchResults {
  list-style: none;
  margin-top: 10px;
  padding: 0;
  max-width: 500px;
}

#searchResults li {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}

#searchResults li a {
  text-decoration: none;
  color: #111;
}

#searchResults li:hover {
  background: #f5f5f5;
}
