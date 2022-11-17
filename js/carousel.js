const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.track');
const carouselContainerWidth =
  document.querySelector('.card-container').offsetWidth;
let direction = null;
next.addEventListener('click', () => {
  //  flipInfo(track);
  direction = -1;
  track.style.transform = `translateX(-${carouselContainerWidth}px)`;
});

prev.addEventListener('click', () => {
  direction = 1;
  track.style.transition = 'none';
  track.prepend(track.lastElementChild);
  track.style.transform = `translateX(-${carouselContainerWidth}px)`;
  setTimeout(() => {
    track.style.transition = 'transform 0.2s';
    track.style.transform = `translateX(${0}px)`;
  }, 0);
});

const flipInfo = (track1) => {
  let track2 = track1.querySelectorAll('.info');
  track2.forEach((item) => {
    // console.dir(item.style);
    if (item.style.marginBottom === '0px') {
      item.style.marginBottom = '-40px';
    } else {
      item.style.marginBottom = '0px';
    }
  });
};

track.addEventListener('transitionend', () => {
  if (direction === 1) {
  } else if (direction === -1) {
    track.style.transition = 'none';
    track.appendChild(track.firstElementChild);
    track.style.transform = `translateX(${0}px)`;
  }
  setTimeout(() => {
    track.style.transition = 'transform 0.2s';
  }, 0);
});

$(document).ready(function () {
  $('.block__accordeon__item__title').click(function (event) {
    if ($('.block__accordeon').hasClass('one')) {
      $('.block__accordeon__item__title').not($(this)).removeClass('active');
      $('.block__accordeon__item__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
