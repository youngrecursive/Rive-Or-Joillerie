document.querySelector('.menu').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));

const contactModal = document.getElementById("contact-modal");

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    contactModal.showModal();
  });
});

document.querySelector("[data-close-contact]").addEventListener("click", () => {
  contactModal.close();
});

// Fermer en cliquant à l'extérieur
contactModal.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    contactModal.close();
  }
});