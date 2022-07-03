window.addEventListener('load', () => {
  const form = document.getElementById('form');
  const message = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    message.classList.add('active');

    setTimeout(() => {
      message.classList.remove('active');
    }, 4000);
  });
});
