import { routesComponents } from './routesComponents.js';

class Router {
  constructor() {
    this.components = routesComponents;
    this.defaultComponent = routesComponents.menu;
    this.dataHistory = [];
  }

  getComponent() {
    const hash = location.hash.slice(1);
    const component = this.components[hash];

    this.dataHistory.push(hash);

    if (this.dataHistory.length > 10 ) {
        this.dataHistory.shift();
    };

    if (component) {
        return component.render()
    } else {
        return this.defaultComponent.render()
    };
  };

  getHistory() {
    return this.dataHistory;
  };
}

export { Router };
