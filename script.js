const rotateOpen = document.querySelector('#open');
const rotateClose = document.querySelector('#close');
const container = document.querySelector('.container');

rotateOpen.addEventListener('click', () => container.classList.add('show-nav'))

rotateClose.addEventListener('click', () => container.classList.remove('show-nav'))
