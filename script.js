window.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");
    var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
    var skillsSection = document.getElementById("skills");
    if (toggleSkillsBtn && skillsSection) {
        toggleSkillsBtn.addEventListener("click", function () {
            console.log("Button clicked");
            if (skillsSection.style.display === "block") {
                skillsSection.style.display = "none";
                toggleSkillsBtn.textContent = "Show Skills";
            }
            else {
                skillsSection.style.display = "block";
                toggleSkillsBtn.textContent = "Hide Skills";
            }
        });
    }
});
console.log("Script loaded");
