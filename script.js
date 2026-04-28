const sections = document.querySelectorAll("header[id], section[id]");
const sideLinks = document.querySelectorAll(".side-nav .side-link");

let isClickScrolling = false; // 🔥 핵심 변수

function setActive(id) {
  sideLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + id) {
      link.classList.add("active");
    }
  });
}

/* ===== 클릭 ===== */
sideLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (!target) return;

    isClickScrolling = true; // 🔥 스크롤 감지 잠금

    setActive(targetId); // 바로 색 변경

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });

    // 🔥 스크롤 끝나고 다시 감지 허용
    setTimeout(() => {
      isClickScrolling = false;
    }, 600);
  });
});

/* ===== 스크롤 ===== */
window.addEventListener("scroll", () => {
  if (isClickScrolling) return; // 🔥 클릭 중이면 무시

  let currentId = "top";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 250;

    if (window.scrollY >= sectionTop) {
      currentId = section.id;
    }
  });

  setActive(currentId);
});

/* 최초 상태 */
setActive("top");