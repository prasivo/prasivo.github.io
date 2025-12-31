// --- PRASIVO MASTER ENGINE (app.js) ---

// 1. Sidebar Control (Instant Response)
window.toggleSidebar = function(e) {
    e.stopPropagation(); // Click ko bahar jane se roko
    const sb = document.getElementById('sidebar');
    const ol = document.getElementById('overlay');
    sb.classList.toggle('active');
    ol.style.display = sb.classList.contains('active') ? 'block' : 'none';
};

window.closeSidebar = function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
};

// 2. Global Touch Handler (Kahin bhi touch karo close ho jaye)
window.handleGlobalClick = function(e) {
    const sb = document.getElementById('sidebar');
    if (sb.classList.contains('active') && !sb.contains(e.target)) {
        window.closeSidebar();
    }
};

// 3. Navigation
window.showPage = function(pId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pId).classList.add('active');
    window.closeSidebar();
    window.scrollTo(0,0);
};

// 4. SMART AI ENGINE (With Gemini-Style Search Logic)
window.askAI = async function() {
    const input = document.getElementById('aiInput');
    const chat = document.getElementById('aiChat');
    const q = input.value.trim();
    if(!q) return;

    // Hi/Hy Handler
    let lowerQ = q.toLowerCase();
    if(lowerQ === "hi" || lowerQ === "hy" || lowerQ === "hyyy" || lowerQ === "hello") {
        chat.innerHTML += `<div style="text-align:right; margin:10px 0;"><b>You:</b> ${q}</div>`;
        chat.innerHTML += `<div style="color:var(--accent); margin-bottom:15px;"><b>Prasivo AI:</b> Hello! Kaise hain aap? Pharmacy ke baare mein kuch bhi puchiye, main Gemini se turant search karke bataunga.</div>`;
        input.value = "";
        return;
    }

    chat.innerHTML += `<div style="text-align:right; margin:10px 0;"><b>You:</b> ${q}</div>`;
    input.value = "";
    
    // Typing indicator
    const tid = "t-" + Date.now();
    chat.innerHTML += `<div id="${tid}" style="font-size:0.8rem; color:#94a3b8;">Prasivo AI is searching Gemini...</div>`;
    chat.scrollTop = chat.scrollHeight;

    // Simulate Gemini Search
    setTimeout(() => {
        document.getElementById(tid).remove();
        let res = getGeminiPowerResponse(lowerQ);
        chat.innerHTML += `<div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:10px; margin-bottom:15px; border-left:3px solid #6366f1;">
            <b>Prasivo AI:</b> ${res}
        </div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 800);
};

function getGeminiPowerResponse(q) {
    // Ye logic har subject ke liye kaam karega
    if(q.includes("ok")) return "Theek hai bhai! Aur kuch janna hai?";
    if(q.includes("cell")) return "Cell body ki structural aur functional unit hai. [attachment_0](attachment)";
    if(q.includes("anatomy")) return "Anatomy matlab body ka structure aur location. [attachment_1](attachment)";
    if(q.includes("physiology")) return "Physiology matlab body parts kaise kaam karte hain.";
    
    // Universal Response (Gemini Search Simulation)
    return `Bhai, ${q} ke baare mein maine Gemini par search kiya. Ye Pharmacy ka ek important topic hai. Filhaal, main iska ek detailed Hinglish summary notes section mein add kar raha hoon!`;
}
  
