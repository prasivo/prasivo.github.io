// --- CORE NAVIGATION LOGIC ---
let currentPath = [];

// Sidebar functions with direct style for 100% result
window.openSidebar = (e) => { 
    if(e) e.stopPropagation(); 
    document.getElementById('sidebar').classList.add('active'); 
};

window.closeSidebar = () => {
    document.getElementById('sidebar').classList.remove('active');
};

// Sabse Important: Page Switcher (Fixed Touch Issue)
window.showPage = (id) => {
    // 1. Saari pages ko dhoondo aur hide karo
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none'; // Ise hide karna zaroori hai touch enable karne ke liye
    });
    
    // 2. Sirf target page ko dikhao
    const activePage = document.getElementById(id);
    if(activePage) {
        activePage.classList.add('active');
        activePage.style.display = 'block';
    }
    
    closeSidebar();
    
    // Quantum UI effect (if exists)
    if (typeof QuantumUI !== 'undefined') QuantumUI.pageTransition();
};

// Home Button Function
window.goToHome = () => {
    showPage('home-page');
    const list = document.getElementById('selection-list');
    if(list) list.innerHTML = ""; // Purana data saaf
};

// --- SYLLABUS RENDERING (B.PHARM, D.PHARM, GPAT, CUET) ---

window.renderSyllabus = (course) => {
    const list = document.getElementById('selection-list');
    const title = document.getElementById('selection-title');
    const back = document.getElementById('dynamic-back');
    
    list.innerHTML = "";
    
    // Check if it's Entrance (GPAT/CUET) or Semester (B/D Pharm)
    if (course === 'gpat' || course === 'cuet') {
        renderEntranceExams(course);
        return;
    }

    title.innerText = course.toUpperCase() + " Semesters";
    let sems = (course === 'bpharm') ? 8 : (course === 'dpharm' ? 2 : 0);
    
    for(let i=1; i<=sems; i++) {
        list.innerHTML += `<div class="card" onclick="renderSubjects('${course}', 'sem${i}')"><h3>Semester ${i}</h3></div>`;
    }
    
    back.onclick = () => goToHome();
    showPage('selection-page');
};

// GPAT/CUET Logic
window.renderEntranceExams = (examKey) => {
    const list = document.getElementById('selection-list');
    const title = document.getElementById('selection-title');
    const back = document.getElementById('dynamic-back');
    
    list.innerHTML = "";
    title.innerText = examKey.toUpperCase() + " Subjects";
    
    const subjects = prasivoData[examKey]; 
    for(let s in subjects) {
        list.innerHTML += `
            <div class="card" onclick="renderUnits('${examKey}', 'core', '${s}')">
                <h3>${subjects[s].name}</h3>
                <p style="font-size: 12px; color: cyan;">Entrance Focus</p>
            </div>`;
    }
    
    back.onclick = () => goToHome();
    showPage('selection-page');
};

window.renderSubjects = (course, sem) => {
    const list = document.getElementById('selection-list');
    const title = document.getElementById('selection-title');
    list.innerHTML = "";
    title.innerText = "Select Subject";
    
    const subjects = prasivoData[course][sem];
    for(let s in subjects) {
        list.innerHTML += `<div class="card" onclick="renderUnits('${course}', '${sem}', '${s}')"><h3>${subjects[s].name}</h3></div>`;
    }
    document.getElementById('dynamic-back').onclick = () => renderSyllabus(course);
};

window.renderUnits = (course, sem, sub) => {
    const list = document.getElementById('selection-list');
    document.getElementById('selection-title').innerText = "Select Unit";
    list.innerHTML = "";
    
    const units = prasivoData[course][sem][sub].units;
    for(let u in units) {
        list.innerHTML += `<div class="card" onclick="renderTopics('${course}', '${sem}', '${sub}', '${u}')"><h3>${units[u].name}</h3></div>`;
    }
    
    // Entrance ke liye 'core' path check
    document.getElementById('dynamic-back').onclick = (sem === 'core') ? 
        () => renderEntranceExams(course) : () => renderSubjects(course, sem);
};

window.renderTopics = (course, sem, sub, unit) => {
    const list = document.getElementById('selection-list');
    document.getElementById('selection-title').innerText = "Select Topic";
    list.innerHTML = "";
    
    const topics = prasivoData[course][sem][sub].units[unit].topics;
    for(let t in topics) {
        list.innerHTML += `<div class="card" onclick="openTopic('${course}', '${sem}', '${sub}', '${unit}', '${t}')"><h3>${topics[t].title}</h3></div>`;
    }
    document.getElementById('dynamic-back').onclick = () => renderUnits(course, sem, sub);
};

let activeContent = null;
window.openTopic = (course, sem, sub, unit, topic) => {
    activeContent = prasivoData[course][sem][sub].units[unit].topics[topic];
    document.getElementById('topic-title').innerText = activeContent.title;
    document.getElementById('topic-body').innerHTML = activeContent.layers.pass;
    
    document.getElementById('study-back').onclick = () => renderTopics(course, sem, sub, unit);
    
    // Progress Tracking
    if (typeof trackProgress === 'function') trackProgress(course, topic);
    
    showPage('study-page');
};

window.switchLayer = (layer) => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('topic-body').innerHTML = activeContent.layers[layer];
};

// --- SYSTEM INITIALIZATION ---

const App = {
    init: function() {
        console.log("App: Pharmacy Intelligence System Online");
        
        // Modules activation
        if (typeof AppMemory !== 'undefined') AppMemory.syncState();
        if (typeof SensorySystem !== 'undefined') SensorySystem.init();
        
        // Initial page load
        const hash = window.location.hash.substring(1);
        if(hash) showPage(hash); else showPage('home-page');
    }
};

function trackProgress(course, topic) {
    if (typeof PharmacyBrain !== 'undefined') PharmacyBrain.analyzeTopicWeightage(course);
    if (typeof AppMemory !== 'undefined' && typeof appState !== 'undefined') {
        appState.completedTopics.push(topic);
        AppMemory.saveData('userProgress', appState.completedTopics);
    }
}

// Global listener for touch and load
window.addEventListener('load', () => App.init());
