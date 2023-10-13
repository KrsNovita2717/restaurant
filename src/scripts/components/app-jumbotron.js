class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-image">
        <figure>
          <img src="images/hero-image.jpg" alt="Tampilan meja yang ada di restoran">
        </figure>
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