const ExamSurvival = {
    countdown: function(examDate) {
        // Exam ke din tak ka calculation
    },
    
    // Syllabus se important sections nikalna
    getHighWeightageTopics: function(exam) {
        if(exam === 'GPAT') {
            return ["Pharmacology", "Pharmaceutical Chemistry", "Pharmaceutics", "Pharmacognosy"]; //
        }
        if(exam === 'D_PHARM') {
            return ["Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacognosy", "Human Anatomy"]; //
        }
    }
};
