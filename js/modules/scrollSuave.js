export default class ScrollSuave{
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
    if(options){
      this.options = options;
    } else {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      }
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }
  scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    section.scrollIntoView(this.options);
  }
  addLinkEvent(){
    this.linksInternos.forEach(link=>{
      link.addEventListener('click',this.scrollToSection);
    })
  }
  init(){
    if(this.linksInternos.length)
      this.addLinkEvent();
    return this;
  }
}