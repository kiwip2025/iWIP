document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const blogBtn = document.getElementById("blogViewBtn");
  const presBtn = document.getElementById("presentationViewBtn");

  // Prüfe vorherige Einstellung
  const savedMode = localStorage.getItem("viewMode");
  if (savedMode === "presentation") {
    body.classList.add("presentation-view");
  }

  // Umschalten zur Blogansicht
  if (blogBtn) {
    blogBtn.addEventListener("click", () => {
      body.classList.remove("presentation-view");
      localStorage.setItem("viewMode", "blog");
    });
  }

  // Umschalten zur Präsentationsansicht
  if (presBtn) {
    presBtn.addEventListener("click", () => {
      body.classList.add("presentation-view");
      localStorage.setItem("viewMode", "presentation");
    });
  }
});