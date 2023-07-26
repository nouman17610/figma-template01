const hamIcon = document.querySelector('.menu-icon');
const navItems = document.querySelector('.menu-list');
hamIcon.addEventListener('click', () => {
  hamIcon.classList.toggle('active');
  navItems.classList.toggle('active');
});
document.querySelectorAll('.menu-item a').forEach((n) => n.addEventListener('click', () => {
  hamIcon.classList.remove('active');
  navItems.classList.remove('active');
  })
);
const closebutton = document.querySelector('.cross');
closebutton.addEventListener("click", () => {
  //navItems.classList.add('hide');
  hamIcon.classList.remove('active');
  navItems.classList.remove('active');
});

function validateEmail() {
  const emailField = document.getElementById("email");
  const errMsg = document.getElementById("err-msg");

  if (emailField.value !== emailField.value.toLowerCase()) {
    errMsg.style.display = "block";
    return false;
  }

  errMsg.style.display = "none";
  return true;
}