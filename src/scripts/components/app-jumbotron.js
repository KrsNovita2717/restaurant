class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-image">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
          <img src="./images/hero-image-large.jpg" alt="Tampilan meja yang ada di restoran">
        </picture>
      </div>
      <div class="inner">
        <h1 class="title">Flavoriesta</h1>
        <p class="subtitle">
          Explore Our Restaurant Selection
        </p>
      </div>
    `;
  }
}

customElements.define('app-jumbotron', AppJumbotron);