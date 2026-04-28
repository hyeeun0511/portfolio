document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("header[id], section[id]");
    const links = document.querySelectorAll(".side-link");
  
    function setActive(id){
      links.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + id){
          link.classList.add("active");
        }
      });
    }
  
    links.forEach(link=>{
      link.addEventListener("click",(e)=>{
        e.preventDefault();
  
        const id = link.getAttribute("href").replace("#","");
        const target = document.getElementById(id);
  
        if(!target) return;
  
        setActive(id);
  
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      });
    });
  
    window.addEventListener("scroll",()=>{
      let current = "top";
  
      sections.forEach(section=>{
        if(window.scrollY >= section.offsetTop - 250){
          current = section.id;
        }
      });
  
      setActive(current);
    });
  
    setActive("top");
  });