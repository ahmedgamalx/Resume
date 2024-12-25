// Theme toggle functionality
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

window.onload = function() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      document.body.classList.toggle("dark", savedTheme === "dark");
  }

  // Modal functionality for images
  document.querySelectorAll("img.clickable").forEach((img) => {
      img.addEventListener("click", function () {
          const modal = document.querySelector(".modal");
          const modalImg = modal.querySelector("img");
          modal.style.display = "flex";
          modalImg.src = this.src;
      });
  });

  document.querySelector(".modal-close").addEventListener("click", function () {
      document.querySelector(".modal").style.display = "none";
  });
};
