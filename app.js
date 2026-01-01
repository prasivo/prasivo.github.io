// --- PRASIVO LOGIC ---
let currentTopic = null;
let isExamMode = false;

window.showPage = function(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    closeSidebar();
    window.scrollTo(0,0);
};

window.openSidebar = function(e) {
    e.stopPropagation();
    document.getElementById('sidebar').classList.add('active');
};

window.closeSidebar = function() {
    document.getElementById('sidebar').classList.remove('active');
};

// LOAD TOPIC
window.loadTopic = function(key) {
    currentTopic = prasivoData[key];
    if(isExamMode) {
        renderExamMode();
    } else {
        document.getElementById('topic-title').innerText = currentTopic.title;
        document.getElementById('topic-body').innerHTML = currentTopic.layers.pass;
        showPage('study-page');
    }
};

window.switchLayer = function(layer) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('topic-body').innerHTML = currentTopic.layers[layer];
};

// EXAM MODE LOGIC
window.toggleExamMode = function() {
    isExamMode = !isExamMode;
    if(isExamMode) {
        document.body.classList.add('exam-mode');
        alert("EXAM MODE ACTIVE: Sirf Scoring Data dikhega!");
        if(currentTopic) renderExamMode(); else showPage('bpharm-page');
    } else {
        document.body.classList.remove('exam-mode');
        showPage('home-page');
    }
};

function renderExamMode() {
    const content = document.getElementById('exam-content');
    content.innerHTML = `
        <div class="exam-section">
            <h3>80% MARKS ZONE (Scoring Points)</h3>
            <p>${currentTopic.layers.pass}</p>
        </div>
        <div class="exam-section">
            <h3 style="color:var(--accent)">2 MARKS QUESTIONS</h3>
            ${currentTopic.examMode.imp2.map(q => `<div class="q-card">${q}</div>`).join('')}
        </div>
        <div class="exam-section">
            <h3 style="color:var(--accent)">5 & 10 MARKS QUESTIONS</h3>
            ${currentTopic.examMode.imp10.map(q => `<div class="q-card">${q}</div>`).join('')}
        </div>
        <div class="exam-section" style="border-color:yellow">
            <h3 style="color:yellow">⚠️ COMMON MISTAKES</h3>
            <p>${currentTopic.examMode.mistakes}</p>
        </div>
    `;
    showPage('exam-page');
}
