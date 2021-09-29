export const activeClass = 'ativo';
import initTabMenu from './modules/tabMenu.js'
import initAccordion from './modules/accordion.js';
import initScrollSuave from './modules/scrollSuave.js';
import initAnimacaoScroll from './modules/animaScroll.js'
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initAnimaNumeros from './modules/animaNumeros.js';

initTabMenu()
initAccordion();
initScrollSuave();
initAnimacaoScroll();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();

const animacoes = document.querySelectorAll('[data-anime]');
animacoes.forEach(secao=>{
  const direcao = secao.dataset.anime;
  if(secao.dataset.anime === 'show-right'){
    secao.classList.add(direcao)
  }
  if(secao.dataset.anime === 'show-down'){
    secao.classList.add(direcao)
  }
})