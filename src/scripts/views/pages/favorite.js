const Favorite = {
  async render() {
    return `
      <section id="favorite">
        <h2 class="section__heading">Favorite Page</h2>
        <div id="restaurants" class="restaurants__list">
        </div>
      </section>
    `;
  },

  async afterRender() {
    //
  },
};

export default Favorite;