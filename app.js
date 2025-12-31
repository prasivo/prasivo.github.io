// --- PRASIVO MASTER SCRIPT (app.js) ---

// 1. Sidebar functions
window.toggleSidebar = function() {
    const sb = document.getElementById('sidebar');
    const ol = document.getElementById('overlay');
    sb.classList.add('active');
    ol.style.display = 'block';
};

window.closeSidebar = function() {
    const sb = document.getElementById('sidebar');
    const ol = document.getElementById('overlay');
    if(sb) sb.classList.remove('active');
    if(ol) ol.style.display = 'none';
};

// 2. Navigation
window.showPage = function(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById(pageId);
    if(target) target.classList.add('active');
    
    window.closeSidebar();
    window.scrollTo(0,0);
};

// 3. AI Engine (Unlimited Topics Logic)
window.askAI = function() {
    const input = document.getElementById('aiInput');
    const chat = document.getElementById('aiChat');
    const text = input.value.trim();

    if(!text) return;

    // User Message
    chat.innerHTML += `<div style="text-align:right; margin-bottom:15px; color:#fff;"><b>You:</b> ${text}</div>`;
    input.value = "";

    // AI Response Logic
    setTimeout(() => {
        let response = generateHinglishAnswer(text.toLowerCase());
        chat.innerHTML += `<div style="margin-bottom:20px; background:rgba(255,255,255,0.05); padding:12px; border-radius:15px; border-left:4px solid #6366f1;">
            <b style="color:#22d3ee">AI:</b> ${response}
        </div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 600);
};

function generateHinglishAnswer(q) {
    if(q.includes("cell")) return "Cell body ki sabse chhoti functional unit hai. Isme mitochondria (powerhouse) aur nucleus (brain) hota hai.";
    if(q.includes("anatomy")) return "Anatomy matlab body ka structure. Konsa part kahan hai, ye Anatomy batati hai.";
    if(q.includes("work") || q.includes("kaise")) return "Pharmacy mein 'kaise kaam karta hai' ko Physiology bolte hain. Jaise dil blood pump kaise karta hai.";
    if(q.includes("prasoon")) return "Prasoon Gupta Prasivo ke Founder hain jo pharmacy ko easy bana rahe hain.";
    
    return `Bhai, aapne ${q} ke bare mein pucha hai. Ye ek badhiya topic hai! Main ise jaldi notes mein detail mein add karunga.`;
}

// 4. Language Alert
window.changeLang = function() {
    const val = document.getElementById('langSwitch').value;
    alert("Language changed to " + val + ". Content update ho raha hai!");
};
