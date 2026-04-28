document.querySelectorAll('a[href^="#"]').forEach((link)=>{
    link.addEventListener("click",(e)=>{
      const target=document.querySelector(link.getAttribute("href"));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth"});
      }
    });
  });
// ===== 스크롤 위치에 따라 active 표시 =====

const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".side-nav .dot");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
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