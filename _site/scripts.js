// Skill Data
const skills = {
  languages: [
    { name: "Python", icon: "fab fa-python" },
    { name: "R", icon: "fas fa-code" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Java", icon: "fab fa-java" },
    { name: "C++", icon: "fas fa-copyright" },
    { name: "JavaScript", icon: "fab fa-js-square" }
  ],
  technologies: [
    { name: "Microsoft Office", icon: "fas fa-file-alt" },
    { name: "NumPy", icon: "fas fa-chart-line" },
    { name: "Pandas", icon: "fas fa-table" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "Stata", icon: "fas fa-chart-bar" },
    { name: "Tableau", icon: "fas fa-chart-pie" },
    { name: "Stripe API", icon: "fab fa-stripe" },
    { name: "Django", icon: "fab fa-python" },
    { name: "React", icon: "fab fa-react" },
    { name: "Jira", icon: "fab fa-jira" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Git", icon: "fas fa-code-branch" }
  ]
};

// Function to Populate Skills
function populateSkills(category, containerId) {
  const container = document.getElementById(containerId);
  skills[category].forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
    skillDiv.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
    container.appendChild(skillDiv);
  });
}

// Load Skills on Page Load
document.addEventListener("DOMContentLoaded", () => {
  populateSkills("languages", "languages");
  populateSkills("technologies", "technologies");
});
