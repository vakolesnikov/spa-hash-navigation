import { data } from '../data/index.js';
import { generateLinkBack } from '../components/links.js';

export default class ItemsPage {
  render() {
    const itemsPage = document.createElement('div');
    const itemsPageHeader = document.createElement('div');
    const itemsPageList = document.createElement('ul');

    const items = Object.values(data.items);

    itemsPageList.className = 'list-group list-items';

    itemsPageHeader.className = 'list-group-item';
    itemsPageHeader.innerHTML = `
      <div class='product-box product-box_title'>
        <div class='product-item'>Наименование</div>
        <div class='product-item'>Количество</div>
        <div class='product-item'>Цена</div>
      </div>
    `;

    items.forEach(item => {
      const elem = document.createElement('li');
      elem.className = 'list-group-item';

      elem.innerHTML = `
        <div class='product-box'>
          <div class='product-item'>${item.name}</div>
          <div class='product-item'>${item.quantity}</div>
          <div class='product-item'>${item.price}</div>
        </div>
      `;

      itemsPageList.appendChild(elem);
    })

    const lnk = generateLinkBack('Назад');

    itemsPage.appendChild(itemsPageHeader);
    itemsPage.appendChild(itemsPageList);
    itemsPage.appendChild(lnk);

    return itemsPage;
  }
}
