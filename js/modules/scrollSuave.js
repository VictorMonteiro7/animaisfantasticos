export default function initScrollSuave(){
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // })
  
  }
  linksInternos.forEach(link=>{
    link.addEventListener('click',scrollToSection);
  })
}