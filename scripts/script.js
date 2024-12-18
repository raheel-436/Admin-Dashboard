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
/*
Explanation:
querySelectorAll: It selects all the span elements inside .theme-toggler.
forEach: Loops through both spans and toggles the active class on each click.*/

/*Dynamic Display of tables*/

Orders.forEach((order) => {
  const tr = document.createElement("tr");

  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.shipping === "Declined"
        ? "danger"
        : order.shipping === "Pending"
        ? "warning"
        : "primary"
    }">${order.shipping}</td> 
    <td class="primary">Details</td>
  `;

  tr.innerHTML = trContent;

  document.querySelector("table tbody").appendChild(tr);
});
