// Navbar background bacground blur on scroll
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  if (window.scrollY > 20) {
    header.classList.add('navbar-bg-blur');
    nav.classList.remove('bg-clr-ultra-pure-white');
  } else {
    header.classList.remove('navbar-bg-blur');
    nav.classList.add('bg-clr-ultra-pure-white');
  }
});
