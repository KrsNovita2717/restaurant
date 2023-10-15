import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

import './components/app-bar';
import './components/app-jumbotron';
import './components/app-footer';

const app = new App({
  button: document.querySelector('#open-menu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

function handleScroll() {
  const appbar = document.querySelector('app-bar');
  const { scrollY } = window;

  if (scrollY > 100) {
    appbar.classList.add('scroll');
  } else {
    appbar.classList.remove('scroll');
  }
}

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', handleScroll);
