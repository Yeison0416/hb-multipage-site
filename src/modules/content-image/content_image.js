import './content_image.scss'
import template from './content_image.pug'
import dataContentImage from './../../data/data_contentImage.json'

export class ContentImage {
  constructor (node) {
    this.node = node
    this.prueba()
  }

  prueba () {
    this.node.innerHTML = template(dataContentImage)
    console.log(this.node)
    console.log('entre')
  }
}
