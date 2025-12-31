fetch("data.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("programTitle").innerText =
      data.program + " – " + data.semester;

    document.getElementById("semesterTitle").innerText =
      "Based on " + data.syllabus_source + " Syllabus";

    // Syllabus list
    const syllabusList = document.getElementById("syllabusList");
    data.syllabus.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      syllabusList.appendChild(li);
    });

    // Subjects
    const container = document.getElementById("subjectsContainer");
    data.subjects.forEach(sub => {
      const div = document.createElement("div");
      div.className = "subject-card";

      div.innerHTML = `
        <h4>${sub.name} <small>(${sub.code})</small></h4>
        <p><strong>Exams:</strong> ${sub.exams.join(", ")}</p>
        <ul>
          ${sub.units.map(u => `<li>${u}</li>`).join("")}
        </ul>
      `;

      container.appendChild(div);
    });
  });
