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
    this.elements.linkMenu = document.querySelector('.header-global__content-item')
  }

  setEvents () {
    this.node.addEventListener('click', (this.eventsMenu.bind(this)))
    this.elements.linkMenu.addEventListener('click', (this.eventsMenu.bind(this)))
  }

  eventsMenu () {
    console.log('ok')
    this.elements.header.classList.toggle('btn-pressed')
    this.elements.openedmenu.classList.toggle('opened-menu')
  }
}
