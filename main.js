const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  width: 284 * 4.3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
})

const hamburgerButtonEl = document.getElementById('hamburger-button');
const menuEl = document.querySelector('.menu')

function handleHamburgerButtonClick(event) {
  if (!menuEl) return;
  const isHidden = menuEl.classList.contains('d-none');

  if (!isHidden) {
    menuEl.classList.remove('d-flex')
    menuEl.classList.add('d-none')
  } else {
    menuEl.classList.remove('d-none')
    menuEl.classList.add('d-flex')
  }
}

if (hamburgerButtonEl) {
  hamburgerButtonEl.addEventListener('click', handleHamburgerButtonClick)
}