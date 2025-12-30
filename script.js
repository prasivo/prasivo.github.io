const translations = {
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

const langSelect = document.querySelector(".lang-select");

langSelect.addEventListener("change", () => {
  const lang = langSelect.value.toLowerCase();

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerText = translations[key][lang];
  });
});
