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

    function updateGradientTransition(){
        const verotio = document.getElementById("verotio");
        const next = document.getElementById("nextdebut");
      
        if(!verotio || !next) return;
      
        const start = verotio.offsetTop + verotio.offsetHeight - window.innerHeight;
        const end = next.offsetTop;
      
        const scrollY = window.scrollY;
      
        let progress = (scrollY - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress));
      
        document.body.style.setProperty("--scroll-progress", progress);
      }
      
      window.addEventListener("scroll", updateGradientTransition);
      updateGradientTransition();

    const revealItems = document.querySelectorAll(
        "#profile .section-title, #profile .section-desc, #profile .card, #profile .profile-image-box, #monkit .split, #monkit .detail-grid, #monkit .color-system-box, #monkit .package-showcase, #verotio .split, #verotio .detail-grid, #verotio .result-box, #verotio .cup-holder-showcase, #verotio .color-system-box"
      );
    
      revealItems.forEach((item, index) => {
        item.classList.add("reveal");
        if(index % 3 === 1) item.classList.add("delay-1");
        if(index % 3 === 2) item.classList.add("delay-2");
      });
    
      if("IntersectionObserver" in window){
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting){
              entry.target.classList.add("show");
            }
          });
        }, {
          threshold: 0.16
        });
      
        revealItems.forEach(item => revealObserver.observe(item));
      }else{
        revealItems.forEach(item => item.classList.add("show"));
      }
  });
