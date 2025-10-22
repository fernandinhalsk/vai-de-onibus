const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const isOpen = content.style.display === "block";

    document.querySelectorAll(".accordion-content").forEach((el) => {
      el.style.display = "none";
    });

    if (!isOpen) {
      content.style.display = "block";
    }
  });
});
