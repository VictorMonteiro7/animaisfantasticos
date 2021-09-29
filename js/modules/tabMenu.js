import {activeClass} from '../script.js'
export default function initTabMenu(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
    
  function activeTab(index){
    tabContent.forEach(item=>item.classList.remove(activeClass));
    tabContent[index].classList.add(activeClass);
  }
  
  tabMenu.forEach((item,index)=>{
    item.addEventListener('click',()=>{
      activeTab(index);
    })
  })
}