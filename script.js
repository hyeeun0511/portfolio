const sections = document.querySelectorAll("header[id], section[id]");
const dots = document.querySelectorAll(".side-nav .dot");

function setActiveDot(id) {
  dots.forEach((dot) => {
    dot.classList.remove("active");

    if (dot.getAttribute("href") === `#${id}`) {
      dot.classList.add("active");
    }
  });
}

/* 클릭했을 때 바로 색 유지 */
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = dot.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      setActiveDot(targetId);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* 스크롤 위치에 따라 active 변경 */
window.addEventListener("scroll", () => {
  let currentId = "top";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 220;

    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  setActiveDot(currentId);
});

/* 처음 들어왔을 때 첫 번째 dot active */
setActiveDot("top");