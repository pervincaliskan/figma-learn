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
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  // Başlangıçta ilk slaytı göster
  slides[currentIndex].style.display = "block";

  prevBtn.addEventListener("click", function () {
    // currentIndex = 1
    if (currentIndex > 0) {
      slides[currentIndex].style.display = "none";
      currentIndex--;
      // currentIndex = 0
      slides[currentIndex].style.display = "block";
    } else {
      // currentIndex = 0
      currentIndex = slides.length - 1;
      // currentIndex = 3

      for (let index = 0; index < slides.length; index++) {
        const slide = slides[index];
        if (index === currentIndex) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      }
    }
  });

  nextBtn.addEventListener("click", function () {
    // // currentIndex = 0
    if (currentIndex < slides.length - 1) {
      slides[currentIndex].style.display = "none";
      currentIndex++;
      slides[currentIndex].style.display = "block";
    } else {
      currentIndex = 0;

      for (let index = 0; index < slides.length; index++) {
        const slide = slides[index];
        if (index === currentIndex) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      }

    }
  });
});
