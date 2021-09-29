import {activeClass} from '../script.js';
export default function initAccordion(){
  function activeAccordion(event){
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  
  const accordionList = document.querySelectorAll('[data-accordion] dt');  
  accordionList.forEach(item=>{    
    item.addEventListener('click',activeAccordion);    
  })  
}