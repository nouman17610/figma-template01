const hamIcon = document.querySelector(".menu-icon");
const navItems = document.querySelector(".menu-list");

hamIcon.addEventListener("click", () => {
  hamIcon.classList.toggle("active");
  navItems.classList.toggle("active");
});

document.querySelectorAll(".menu-item a").forEach((n) =>
  n.addEventListener("click", () => {
    hamIcon.classList.remove("active");
    navItems.classList.remove("active");
  })
);

const closebutton = document.querySelector(".cross");
closebutton.addEventListener("click", function () {
  console.log("button clicked");
  navItems.classList.add("hide");
});
