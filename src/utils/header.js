window.addEventListener('load', () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < anchors.length; i += 1) {
    anchors[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      const blockID = anchors[i].getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
});
