document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("form-result");

    if (name && email && message) {
      result.textContent = `Terima kasih, ${name}! Pesanmu sudah terkirim 🎉`;
      result.style.color = "#10b981";
      this.reset();
    } else {
      result.textContent = "Mohon isi semua kolom sebelum mengirim.";
      result.style.color = "#ef4444";
    }
  });

window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

document.getElementById("dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
