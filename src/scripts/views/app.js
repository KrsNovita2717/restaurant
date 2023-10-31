import 'regenerator-runtime';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import { createErrorPage, createLoader } from './templates/template-creator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      const id = skipLink.getAttribute('href');
      const targetSection = document.querySelector(id);
      if (targetSection) {
        targetSection.setAttribute('tabindex', 0);
        targetSection.focus();
      }
    });
  }

  static _showJumbotron() {
    const jumbotron = document.querySelector('app-jumbotron');
    const appBar = document.querySelector('app-bar');
    if (jumbotron) {
      jumbotron.style.display = 'flex';
      appBar.style.backgroundColor = 'tranparent';
    }
  }

  static _hideJumbotron() {
    const jumbotron = document.querySelector('app-jumbotron');
    const appBar = document.querySelector('app-bar');
    if (jumbotron) {
      jumbotron.style.display = 'none';
      appBar.style.backgroundColor = '#f7dfff';
    }
  }

  async renderPage() {
    const loaderElement = createLoader();
    this._content.innerHTML += loaderElement;

    const idLoader = document.querySelector('#loader');
    idLoader.style.display = 'block';

    setTimeout(async () => {
      idLoader.style.display = 'none';

      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      try {
        if (url.includes('favorite') || url.includes('detail')) {
          App._hideJumbotron();
        } else {
          App._showJumbotron();
        }
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        this._content.innerHTML += createErrorPage();
      }
    }, 1000);
  }
}

export default App;
