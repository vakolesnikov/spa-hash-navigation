import Menu from '../pages/menu.js';
import About from '../pages/about.js'
import ItemsPage from '../pages/itemsPage.js'

const routesComponents = {
  menu: new Menu(),
  about: new About(),
  items: new ItemsPage(),
};

export { routesComponents };
