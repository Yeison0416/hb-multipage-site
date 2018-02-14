import './main_menu.scss'

import template from './main_menu.pug'
import datamenu from './../../data/data_main_menu.json'

export class Mainmenu {
  constructor (node) {
    this.node = node
    this.elements = {}
    this.setframework()
    this.setelementsmenu()
    this.setEventsmenu()
  }

  setframework () {
    this.node.innerHTML = template(datamenu)
  }

  setelementsmenu () {
    this.btnhamburger = document.querySelector('.header-global__btnhamburger')
    this.headerglobal = document.querySelector('.header-global')
    this.navigation = document.querySelector('.header-global__nav-wrapper')
    this.links = document.querySelectorAll('.header-global__nav-item')
    this.elements.openedmenu = document.querySelector('.container')
  }

  setEventsmenu () {
    this.btnhamburger.addEventListener('click', () => {
      this.headerglobal.classList.toggle('btnhamburger-pressed')
      this.elements.openedmenu.classList.toggle('opened-menu')
    })
    this.navigation.addEventListener('click', (this.showsubmenu.bind(this)))
  }

  showsubmenu (event) {
    const clickedElement = event.target.closest('.header-global__nav-item')
    if (clickedElement.classList.contains('header-global__nav-item')) {
      clickedElement.classList.toggle('link-selected')
    }
  }
}
