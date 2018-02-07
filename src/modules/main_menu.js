import './main_menu.scss'

/* eslint-disable */
import template from './main_menu.pug'
import datamenu from '../data/data_main_menu.json'
/* eslint-disable */

export class Mainmenu {
  constructor (node) {
    this.node = node
    this.elements = {}
    this.setElementsDom()
    this.setEvents()
  }

  setElementsDom () {
    this.elements.openedmenu = document.querySelector('.container')
    this.elements.header = document.querySelector('.header-global')
    this.elements.containernav = document.querySelector('.header-global__nav-wrapper')
    this.elements.linksmenu = document.querySelectorAll('.header-global__content-item')
  }

  setEvents () {
    this.node.addEventListener('click', (this.eventsMenu.bind(this))) 
    this.elements.containernav.addEventListener('click', (this.eventsMenu.bind(this)))
  }

  eventsMenu (event) {
    const clickedElement = event.target
    if(clickedElement.classList.contains('header-global__content-item')){
      this.elements.linksmenu.forEach((element, index) => {
        this.elements.linksmenu[index].classList.remove('header-global__content-item--selected')
      })
      const index = Array.from(this.elements.linksmenu).indexOf(clickedElement)
      this.elements.linksmenu[index].classList.toggle('header-global__content-item--selected')
    }
    else if(clickedElement.classList.contains('header-global__btnmenu') || clickedElement.classList.contains('header-global__btnmenu-line')){
      this.elements.header.classList.toggle('btn-pressed')
      this.elements.openedmenu.classList.toggle('opened-menu')
    }
    
  }
}
