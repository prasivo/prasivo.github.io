const KnowledgeLayers = {
    levels: {
        beginner: "D.Pharm / Basic Concepts",
        intermediate: "B.Pharm / Semester Deep Dive",
        advanced: "GPAT / CUET PG Specialist"
    },
    
    // Check karna ki user kis level par hai
    getCurrentLayer: function(score) {
        if (score > 80) return this.levels.advanced;
        if (score > 50) return this.levels.intermediate;
        return this.levels.beginner;
    },

    // Syllabus data ko layers mein filter karna
    filterByLayer: function(subject) {
        console.log("Filtering content for: " + subject);
        // Logic to show specific difficulty
    }
};
