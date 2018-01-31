import './main_menu.scss'

export class Mainmenu {
  constructor (node) {
    this.node = node
    this.nodemensage = document.querySelector('.js-mensage')
    this.event()
  }

  event () {
    this.node.addEventListener('click', () => {
      this.nodemensage.innerHTML = 'funcionando'
    })
  }
}