document.addEventListener("DOMContentLoaded", () => {
  const isIntro = document.body.classList.contains("intro-page");

  if (isIntro) {
    setTimeout(() => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "histoire.html";
      }, 700);
    }, 4000);
  }
});
