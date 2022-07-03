window.addEventListener('load', () => {
  const sliderWrap = document.getElementById('sliderWrap');
  const slidesList = document.getElementById('slidesList');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  const slides = [...document.getElementsByClassName('slider-interior__slide')];
  const currentSlide = slides.find((el) => !el.classList.contains('active'));

  let slideShift = 47.1;
  let currentSlideShift = 0;
  const slideWidth = currentSlide.offsetWidth / 10;
  const slidesCount = 3;
  let currentActiveSlide = 2;
  const sliderMaxWidth = 1880;

  const getSliderShift = () => {
    if (window.innerWidth < 767.98 && window.innerWidth > 568) {
      slideShift = 9.1;
    } else if (window.innerWidth < 567.98) {
      slideShift = -15;
    } else slideShift = 47.1;

    const currentSliderShift = (sliderMaxWidth - sliderWrap.offsetWidth) / 20;
    currentSlideShift = slideShift + currentSliderShift;
    slidesList.style.transform = `translateX(${currentSlideShift}rem)`;
  };

  getSliderShift();

  const handleClick = (e) => {
    const { className } = e.target;

    if (className.match(/prev/g)) {
      if (currentActiveSlide > 1) {
        currentSlideShift += slideWidth;
        slidesList.style.transform = `translateX(${currentSlideShift}rem)`;
        document.getElementById(`slide${currentActiveSlide}`).classList.remove('active');
        currentActiveSlide -= 1;
        document.getElementById(`slide${currentActiveSlide}`).classList.add('active');
        if (currentActiveSlide === 1) btnPrev.classList.add('disabled');

        btnNext.classList.remove('disabled');
      }
    }

    if (className.match(/next/g)) {
      if (currentActiveSlide < slidesCount) {
        currentSlideShift -= slideWidth;
        slidesList.style.transform = `translateX(${currentSlideShift}rem)`;
        document.getElementById(`slide${currentActiveSlide}`).classList.remove('active');
        currentActiveSlide += 1;
        document.getElementById(`slide${currentActiveSlide}`).classList.add('active');
        if (currentActiveSlide === 3) btnNext.classList.add('disabled');

        btnPrev.classList.remove('disabled');
      }
    }
  };

  document.addEventListener('click', handleClick);
  window.addEventListener('resize', getSliderShift);
});
