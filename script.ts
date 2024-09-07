window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");
  const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
  const skillsSection = document.getElementById("skills");

  if (toggleSkillsBtn && skillsSection) {
    toggleSkillsBtn.addEventListener("click", () => {
      console.log("Button clicked");
      if (skillsSection.style.display === "block") {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
      } else {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
      }
    });
  }
});
console.log("Script loaded");
