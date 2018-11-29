import { generateLinkBack } from '../components/links.js';

export default class About {
  render() {
    const about = document.createElement('div');

    about.className = 'about';

    about.innerHTML = `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    `;

    const lnkBack = generateLinkBack('Назад');

    about.appendChild(lnkBack);

    return about;
  }
}
