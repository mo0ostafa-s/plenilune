const ctaBtn = document.querySelector('#ctaBtn');
const openMenuBtn = document.querySelector('#openMenu');
const nav = document.querySelector('header');

openMenuBtn.addEventListener('click', () => {
  nav.classList.add('open');
  nav.classList.remove('closed');
  openMenuBtn.style.display = "none";
});

ctaBtn.addEventListener('click', () => {
  nav.classList.add('closed');
  nav.classList.remove('open');
  setTimeout(()=>{
    openMenuBtn.style.display = "block";
  }, 3000);
});
