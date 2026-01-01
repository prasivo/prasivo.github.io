// PRASIVO CORE ENGINE
let currentTopicData = null;

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

// STUDY MODE LOGIC
window.loadStudyTopic = function(key) {
    currentTopicData = prasivoData[key];
    document.getElementById('topic-title').innerText = currentTopicData.title;
    document.getElementById('topic-body').innerHTML = currentTopicData.layers.pass;
    
    // Set Back Button behavior
    document.getElementById('study-back').onclick = () => showPage('hap-unit1-topics-page');
    
    showPage('study-content-page');
};

window.switchLayer = function(layer) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('topic-body').innerHTML = currentTopicData.layers[layer];
};

// EXAM MODE LOGIC
window.loadExamTopic = function(key) {
    const data = prasivoData[key];
    const renderArea = document.getElementById('exam-data-render');
    
    renderArea.innerHTML = `
        <div class="card" style="border-color:var(--red)">
            <h3>2 MARKS QUESTIONS (15 Most Important)</h3>
            <div style="margin-top:10px">${data.examMode.q2.join('<br>')}</div>
        </div>
        <div class="card" style="border-color:var(--accent)">
            <h3>5 MARKS QUESTIONS (15 Most Important)</h3>
            <div style="margin-top:10px">${data.examMode.q5.join('<br><br>')}</div>
        </div>
        <div class="card" style="border-color:var(--primary)">
            <h3>10 MARKS QUESTIONS (Long Answers)</h3>
            <div style="margin-top:10px">${data.examMode.q10.join('<br><br>')}</div>
        </div>
    `;
    showPage('exam-final-page');
};
