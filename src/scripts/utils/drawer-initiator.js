const DrawerInitiator = {
  init({ button, drawer, content }) {
    const openButton = button.querySelector('#open-menu');
    const closeButton = button.querySelector('#close-menu');

    openButton.addEventListener('click', (event) => {
      event.stopPropagation();
      drawer.classList.add('open');
      openButton.style.display = 'none';
      closeButton.style.display = 'block';
    });

    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      drawer.classList.remove('open');
      closeButton.style.display = 'none';
      openButton.style.display = 'block';
    });

    content.addEventListener('click', (event) => {
      event.stopPropagation();
      drawer.classList.remove('open');
      closeButton.style.display = 'none';
      openButton.style.display = 'block';
    });
  },
};

export default DrawerInitiator;
