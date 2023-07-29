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
  //Pop code is here
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')
  
  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }