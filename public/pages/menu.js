import { MENU_ROUTES } from '../constants/index.js';
import { generateLinkTo } from '../components/links.js';

export default class Menu {
  render() {
    const { ITEMS, ABOUT } = MENU_ROUTES;

    const menu = document.createElement('nav');
    const lnkItems = generateLinkTo(ITEMS.PATH, ITEMS.TEXT);
    const lnkAbout = generateLinkTo(ABOUT.PATH, ABOUT.TEXT);

    lnkItems.className = 'main-menu-item';
    lnkAbout.className = 'main-menu-item';

    menu.appendChild(lnkItems);
    menu.appendChild(lnkAbout);

    return menu;
  }
}
