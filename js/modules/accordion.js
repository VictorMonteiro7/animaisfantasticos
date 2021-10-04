import {activeClass} from '../script.js';
export default class Accordion{
  constructor(list){    
    this.accordionList = document.querySelectorAll(list);
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }
  toggleAccordion(item){
    item.classList.toggle(activeClass);
    item.nextElementSibling.classList.toggle(activeClass);
  }

  addAccordionEvent(){
    this.accordionList.forEach(item=>{    
      item.addEventListener('click',()=>this.toggleAccordion(item));    
    })  
  }

  init(){
    if(this.accordionList.length){
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }


}