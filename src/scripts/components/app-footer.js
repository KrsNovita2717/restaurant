class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Dicoding
      Restaurant API</a></p>
      <p>Flavouriesta, &copy; Copyright 2023</p>
    `;
  }
}

customElements.define('app-footer', AppFooter);