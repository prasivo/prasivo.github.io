// Sidebar toggle logic
window.openSidebar = (e) => { 
    e.stopPropagation(); 
    document.getElementById('sidebar').classList.add('active'); 
};

window.closeSidebar = () => { 
    document.getElementById('sidebar').classList.remove('active'); 
};

// Page switcher logic
window.showPage = (pageId) => {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
    closeSidebar();
};

// Study Material Loader logic
let activeTopic = null;

window.loadStudyTopic = function(topicKey) {
    // Ye tabhi chalega jab data.js me ye key hogi
    if (prasivoData && prasivoData.topics && prasivoData.topics[topicKey]) {
        activeTopic = prasivoData.topics[topicKey];
        document.getElementById('topic-title').innerText = activeTopic.title;
        document.getElementById('topic-body').innerHTML = activeTopic.layers.pass; // Default Pass layer
        
        // Back button set karo
        document.getElementById('study-back').onclick = () => showPage('hap-unit1-topics-page');
        
        showPage('study-content-page');
    } else {
        alert("Bhai, data.js me topic nahi mila!");
    }
};

// Layer switcher (Pass/Power/Elevation)
window.switchLayer = function(layer) {
    if (!activeTopic) return;
    
    // UI update
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Content update
    document.getElementById('topic-body').innerHTML = activeTopic.layers[layer];
};

// Exam Mode logic
window.loadExamTopic = function(topicKey) {
    if (prasivoData && prasivoData.exams && prasivoData.exams[topicKey]) {
        const examData = prasivoData.exams[topicKey];
        let html = `<h2>${examData.title}</h2><br>`;
        
        // Render Questions
        html += `<h3 style="color:var(--red)">2 Marks (Short)</h3><ul>`;
        examData.q2.forEach(q => html += `<li>${q}</li>`);
        html += `</ul><h3 style="color:var(--red)">5/7 Marks (Medium)</h3><ul>`;
        examData.q5.forEach(q => html += `<li>${q}</li>`);
        html += `</ul><h3 style="color:var(--red)">10 Marks (Long)</h3><ul>`;
        examData.q10.forEach(q => html += `<li>${q}</li>`);
        html += `</ul>`;
        
        document.getElementById('exam-data-render').innerHTML = html;
        showPage('exam-final-page');
    }
};
