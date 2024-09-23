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
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const dhBtnContainer = document.getElementById('dh-btn-container');
dhBtnContainer.addEventListener('click', function (event) {
  if (event.target === historyBtn) {
    historyBtn.classList.remove('dh-btn-inactive');
    historyBtn.classList.add('dh-btn-active');
    donationBtn.classList.remove('dh-btn-active');
    donationBtn.classList.add('dh-btn-inactive');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
  } else if (event.target === donationBtn) {
    donationBtn.classList.remove('dh-btn-inactive');
    donationBtn.classList.add('dh-btn-active');
    historyBtn.classList.remove('dh-btn-active');
    historyBtn.classList.add('dh-btn-inactive');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
  } else {
    return;
  }
});

// Donation Button Click Event
const donateBtns = document.querySelectorAll('.donate-btn');

donateBtns.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    // history section container
    const historyContainer = document.getElementById('history-section');

    // donation card tittle element
    const donationCardTitle =
      event.target.parentElement.querySelector('.donation-tittle').innerText;

    // user balance element
    const userBalanceEl = document.getElementById('user-balance');

    // total donation amount element
    const donationBalanceEl =
      event.target.parentElement.querySelector('.donation-amount');

    // donation amount input element
    const donationAmountEl =
      event.target.parentElement.querySelector('.donation-input');

    // user balance amount
    const userBalance = parseFloat(userBalanceEl.innerText);
    // total donation amount
    const totalDonationBalance = parseFloat(donationBalanceEl.innerText);
    // donation input amount
    const donationAmount = parseFloat(donationAmountEl.value);

    // input validation
    if (
      donationAmountEl.value === '' ||
      donationAmount <= 0 ||
      isNaN(donationAmount) ||
      donationAmount > userBalance
    ) {
      alert('Please enter a valid donation amount');
      return;
    }

    // calculation
    const newBalance = userBalance - donationAmount;
    const newDonationBalance = totalDonationBalance + donationAmount;
    setInnerTextByEl(userBalanceEl, newBalance);
    setInnerTextByEl(donationBalanceEl, newDonationBalance);

    // add donation history
    const historyCard = createHistoryCard(donationCardTitle, donationAmount);
    historyContainer.insertBefore(historyCard, historyContainer.firstChild);

    // clear input
    donationAmountEl.value = '';

    // show success modal
    showModal('success-modal', 'close-success-modal');
  });
});

// Helper Function
function setInnerTextByEl(element, text) {
  element.innerText = text;
}

// Modal Function
function showModal(modalId, closeId) {
  const modalOpen = document.getElementById(modalId);
  const modalClose = document.getElementById(closeId);
  modalOpen.classList.add('da-modal-open');
  modalClose.addEventListener('click', function () {
    modalOpen.classList.remove('da-modal-open');
  });
}

// History Function
function createHistoryCard(title, amount) {
  const donatedAt = new Date().toLocaleString();
  const historyCard = document.createElement('div');
  historyCard.classList.add('history-card');
  historyCard.innerHTML = `
    <h2 class="history-card-tittle">Donated: ${amount} TK</h2>
    <h3 class="history-card-tittle">Category: ${title}</h3>
    <p class="history-card-date">Date: ${donatedAt}</p>
  `;
  return historyCard;
}
