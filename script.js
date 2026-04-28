const sections = document.querySelectorAll("header[id], section[id]");
const navLinks = document.querySelectorAll(".side-nav .side-link");

function setActiveNav(id) {
  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      setActiveNav(targetId);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

window.addEventListener("scroll", () => {
  let currentId = "top";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 220;

    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  setActiveNav(currentId);
});

setActiveNav("top");