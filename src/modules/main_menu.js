import './main_menu.scss'
import template from './main_menu.pug'

import datamenu from '../data/data_main_menu.json'

console.log(datamenu)

export class Mainmenu {
  constructor (node) {
    this.nodemenu = node
    this.usetemplate()
  }

  usetemplate () {
    console.log(template)
    this.nodemenu.innerHTML = template(datamenu)
  }
}
