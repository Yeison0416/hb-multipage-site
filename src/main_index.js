import '../node_modules/reset-css/_reset.scss'

import { Mainmenu } from './modules/Menu/main_menu'
import { ContentImage } from './modules/content-image/content_image'

/* eslint-disable */
const mainmenu = new Mainmenu(document.body)
const contentImage = new ContentImage(document.querySelector('.content-image'))
