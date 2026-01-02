const AppRouter = {
    navigateTo: function(pageId) {
        console.log("Routing to: " + pageId);
        const sections = ['home-page', 'syllabus-page', 'exam-page'];
        
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = (id === pageId) ? 'block' : 'none';
        });

        // URL change kiye bina history track karna
        window.history.pushState({page: pageId}, "", `#${pageId}`);
    }
};
