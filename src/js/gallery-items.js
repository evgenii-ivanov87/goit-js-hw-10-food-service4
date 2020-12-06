import itemTemplates from '../templates/gallery-items.hbs';
import item from '../menu.json'

const markup = itemTemplates(item)

const menuItemRef = document.querySelector('.js-menu')

menuItemRef.insertAdjacentHTML('beforeend',markup)