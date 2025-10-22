document.querySelectorAll(".accordion-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Alterna visibilidade da caixa clicada
    const isOpen = content.style.display === "block";
    document.querySelectorAll(".accordion-content").forEach((el) => {
      el.style.display = "none";
    });

    if (!isOpen) {
      content.style.display = "block";
    }
  });
});
