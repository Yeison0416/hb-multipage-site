import './main_menu.scss'

/* eslint-disable */
import template from './main_menu.pug'
import datamenu from '../data/data_main_menu.json'
/* eslint-disable */

export class Mainmenu {
  constructor (node) {
    const openedmenu = document.querySelector('.container')
    const header = document.querySelector('.header-global')
    this.node = node
    this.trigger(openedmenu, header)
  }

  trigger (openedmenu, header) {
    this.node.addEventListener('click', () => {
      header.classList.toggle('btn-pressed')
      openedmenu.classList.toggle('opened-menu')
    })
  }
}
