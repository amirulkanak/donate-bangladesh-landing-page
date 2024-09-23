// Navbar background blur on scroll
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

// Donation and History Button Toggle
const donateBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const dhBtnContainer = document.getElementById('dh-btn-container');
dhBtnContainer.addEventListener('click', function (event) {
  if (event.target === historyBtn) {
    historyBtn.classList.remove('dh-btn-inactive');
    historyBtn.classList.add('dh-btn-active');
    donateBtn.classList.remove('dh-btn-active');
    donateBtn.classList.add('dh-btn-inactive');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
  } else if (event.target === donateBtn) {
    donateBtn.classList.remove('dh-btn-inactive');
    donateBtn.classList.add('dh-btn-active');
    historyBtn.classList.remove('dh-btn-active');
    historyBtn.classList.add('dh-btn-inactive');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
  } else {
    return;
  }
});
