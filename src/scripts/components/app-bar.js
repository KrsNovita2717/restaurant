class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar__menu">
        <button id="menu-button" title="off canvas button" aria-label="off canvas button">
          <i class="fa-solid fa-bars" id="open-menu"></i>
        </button>
      </div>
      <div class="app-bar__brand">
        <h1>
          <a href="./" title="Web Brand">Flavoriesta</a>
        </h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/explore" title="Ke Halaman Home">Home</a></li>
          <li><a href="#/favorite" title="Ke Halaman favorite">Favorite</a></li>
          <li><a href="https://www.instagram.com/krs_novita2717" title="Ke Sosial Media Author">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);