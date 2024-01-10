



const accordionContainers = document.querySelectorAll(".accordion-container");

accordionContainers.forEach((container) => {
  const accordionHeaders = container.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const correspondingContent = this.nextElementSibling;

      // If the content is currently visible, hide it
      if (correspondingContent)
        if (correspondingContent.style.display === "block") {
          correspondingContent.style.display = "none";
          this.querySelector(".arrow-icon").classList.remove("rotate-up");
        } else {
          // Hide all contents first
          const allContents = container.querySelectorAll(".accordion-content");
          allContents.forEach((content) => {
            content.style.display = "none";
          });

          // Display the corresponding content
          correspondingContent.style.display = "block";
          this.querySelector(".arrow-icon").classList.add("rotate-up");
        }
    });
  });
});


function updateProgress(checkbox, progressIncrement) {
  const progressBar = document.getElementById("myProgressBar");
  let width = parseInt(progressBar.style.width) || 0; // Get current width or default to 0

  if (checkbox.checked) {
    // Increase progress based on the provided progressIncrement when checkbox is checked
    width += progressIncrement;
  } else {
    // Decrease progress when checkbox is unchecked
    width -= progressIncrement;
  }

  // Cap the progress within 0-100%
  width = Math.max(Math.min(width, 100), 0);

  progressBar.style.width = width + "%";

  // Update task completion status
  const completedTasks = document.querySelectorAll(
    '.tasks input[type="checkbox"]:checked'
  ).length;
  const totalTasks = document.querySelectorAll(
    '.tasks input[type="checkbox"]'
  ).length;
  document.getElementById(
    "taskStatus"
  ).innerText = `${completedTasks} / ${totalTasks} tasks completed`;
}

document.addEventListener("DOMContentLoaded", function () {
  const storeNameBtn = document.getElementById("storeNameBtn");
  const acctFeatures = document.getElementById("acctFeatures");

  storeNameBtn.addEventListener("click", function () {
    acctFeatures.style.display =
      acctFeatures.style.display === "block" ? "none" : "block";
  });
});
