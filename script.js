const sections = document.querySelectorAll("section, header");
const dots = document.querySelectorAll(".side-nav .dot");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");

    if (dot.getAttribute("href") === "#" + current) {
      dot.classList.add("active");
    }
  });
});