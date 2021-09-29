import outsideClick from './outsideclick.js';
export default function initDropdownMenu(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach(menu=>{
    const eventos = ['touchstart','click'];
    eventos.forEach(evento=>{
      menu.addEventListener(evento,handleClick)
    })
  })
  
  function handleClick(event){
    event.preventDefault();
    this.classList.add('ativo');
    const eventos = ['touchstart','click'];
    outsideClick(this, eventos,  ()=>{    
      this.classList.remove('ativo')
    });
  }
}