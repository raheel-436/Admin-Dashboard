const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change Theme-->(Dark)
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  // Select both spans
  const spans = themeToggler.querySelectorAll("span");
  // Toggle the 'active' class between the spans
  spans.forEach((span) => span.classList.toggle("active"));
});
