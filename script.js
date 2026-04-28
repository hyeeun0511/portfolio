document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("header[id], section[id]");
    const sideLinks = document.querySelectorAll(".side-nav .side-link");
  
    function setActive(id) {
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
  
        setActive(targetId);
  
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      });
    });
  
    window.addEventListener("scroll", () => {
      let currentId = "top";
  
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 260) {
          currentId = section.id;
        }
      });
  
      setActive(currentId);
    });
  
    setActive("top");
  });