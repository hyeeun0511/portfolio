const sections = document.querySelectorAll("header[id], section[id]");
const sideLinks = document.querySelectorAll(".side-nav .side-link");

function setActiveSideNav(id) {
  sideLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + id) {
      link.classList.add("active");
    }
  });
}

sideLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (!target) return;

    setActiveSideNav(targetId);

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", () => {
  let currentId = "top";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 260;

    if (window.scrollY >= sectionTop) {
      currentId = section.id;
    }
  });

  setActiveSideNav(currentId);
});

setActiveSideNav("top");