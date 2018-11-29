import { Router } from './router/index.js';

const router = new Router();

const updateState = () => {
  root.innerHTML = '';
  const component = router.getComponent();
  root.appendChild(component);
}

const root = document.getElementById('root');

window.addEventListener('hashchange', updateState);
window.addEventListener('load', updateState);
