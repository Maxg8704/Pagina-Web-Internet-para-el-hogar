document.addEventListener("DOMContentLoaded", () => {
  const modals = {
    streaming: {
      title: "Plan Streaming",
      text: "Disfrutá de películas y series en alta calidad sin interrupciones."
    },
    gaming: {
      title: "Plan Gaming",
      text: "Máxima velocidad y baja latencia para tus partidas online."
    },
    trabajo: {
      title: "Plan Trabajo",
      text: "Conexión estable y rápida para videollamadas y home office."
    },
    planes: {
      title: "Nuestros Planes",
      text: "Elegí entre Streaming, Gaming o Trabajo. Cada plan está pensado para cubrir tus necesidades específicas."
    }
  };

  const modalBox = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeBtn = modalBox.querySelector(".close");
  const modalForm = document.getElementById("modal-form");

  function openModal(key) {
    const data = modals[key] || { title: "", text: "" };
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;
    modalBox.style.display = "flex";
    modalBox.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modalBox.style.display = "none";
    modalBox.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".btn[data-modal]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(btn.dataset.modal);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modalBox.addEventListener("click", (e) => {
    if (e.target === modalBox) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBox.style.display === "flex") closeModal();
  });

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por tu consulta, nos pondremos en contacto pronto.");
    modalForm.reset();
    closeModal();
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensaje enviado. Te responderemos a la brevedad 🙌");
      contactForm.reset();
    });
  }
});
