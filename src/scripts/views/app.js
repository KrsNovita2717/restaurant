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
  }

  async renderPage() {
    const loaderElement = createLoader();
    this._content.innerHTML += loaderElement;
    console.log('elemen loader', loaderElement);
    const idLoader = document.querySelector('#loader');
    idLoader.style.display = 'block';

    setTimeout(async () => {
      idLoader.style.display = 'none';

      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      try {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        this._content.innerHTML = createErrorPage();
      }
    }, 1000);
  }
}

export default App;
