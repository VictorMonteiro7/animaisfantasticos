export const activeClass = 'ativo';
import initTabMenu from './modules/tabMenu.js'
import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/scrollSuave.js';
import initAnimacaoScroll from './modules/animaScroll.js'
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initAnimaNumeros from './modules/animaNumeros.js';
import initFuncionamento from './modules/funcionamento.js';

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-accordion] dt');
accordion.init();

initTabMenu()
initAnimacaoScroll();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();

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