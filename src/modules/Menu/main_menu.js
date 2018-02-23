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
    this.sublinks = document.querySelectorAll('.header-global-nav-dropdown__link')
    this.elements.openedmenu = document.querySelector('.container')
  }

  setEventsmenu () {
    this.btnhamburger.addEventListener('click', () => {
      this.headerglobal.classList.toggle('btnhamburger-pressed')
      this.elements.openedmenu.classList.toggle('opened-menu')
      this.links.forEach((element, index) => {
        this.links[index].classList.remove('link-selected')
      })
      this.sublinks.forEach((element, index) => {
        this.sublinks[index].classList.remove('sublink-selected')
      })
    })
    this.navigation.addEventListener('click', (this.showsubmenu.bind(this)))
  }

  showsubmenu (event) {
    const clickedElement = event.target.closest('.header-global__nav-item')
    const clickedSubelement = event.target.closest('.header-global-nav-dropdown__link')
    const indexlink = Array.from(this.links).indexOf(clickedElement)
    const indexsublink = Array.from(this.sublinks).indexOf(clickedSubelement)
    if (clickedElement !== null) {
      if (clickedElement === this.links[indexlink]) {
        this.links.forEach((element, index) => {
          if (index !== indexlink) {
            this.links[index].classList.remove('link-selected')
          }
        })
        this.sublinks.forEach((element, index) => {
          this.sublinks[index].classList.remove('sublink-selected')
        })
        if (clickedSubelement !== this.sublinks[indexsublink]) {
          clickedElement.classList.toggle('link-selected')
        } else if (clickedSubelement === this.sublinks[indexsublink]) {
          this.sublinks.forEach((element, index) => {
            if (index !== indexsublink) {
              this.sublinks[index].classList.remove('sublink-selected')
            }
          })
          clickedSubelement.classList.toggle('sublink-selected')
        }
      }
    } else {
      this.links.forEach((element, index) => {
        this.links[index].classList.remove('link-selected')
      })
    }
  }
}
