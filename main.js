// Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("nextButton");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");

    nextBtn.addEventListener("click", function () {
      // Hide step 1 (basic details)
      step1.style.display = "none";

      // Show step 2 (job details)
      step2.style.display = "block";
    });
  });