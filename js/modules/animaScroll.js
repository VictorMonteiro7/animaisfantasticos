export default function initAnimacaoScroll(){
  const sections = document.querySelectorAll('[data-scroll]')
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll(){
    sections.forEach(section=>{
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade;
        if(isSectionVisible < 0 && !section.classList.contains('ativo')){
          section.classList.add('ativo')
        }
    })
  }
  animaScroll();
  
  window.addEventListener('scroll',animaScroll)
}