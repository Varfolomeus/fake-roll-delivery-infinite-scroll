const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.track');
const popup_one = document.querySelector('.popup--content');
const popup_two = document.querySelector('.popup--content1');
const bodyWidth = document.querySelector('body').offsetWidth;
const bodyHeight = document.querySelector('body').offsetHeight;

const carouselContainerWidth =
  document.querySelector('.card-container').offsetWidth;

const carouselInput = document.querySelector('#carousel-input');
carouselInput.value = 5;
let direction = null;

next.addEventListener('click', () => {
  // track.style = '';
  direction = -1;
  let carouselStep = +carouselInput.value;
  if (carouselStep < 1 || carouselStep > 5) {
    carouselStep = 5;
    carouselInput.value = carouselStep;
  }
  track.style.transform = `translateX(-${
    carouselContainerWidth * carouselStep
  }px)`;
});

prev.addEventListener('click', () => {
  direction = 1;
  let carouselStep = +carouselInput.value;
  if (carouselStep < 1 || carouselStep > 5) {
    carouselStep = 5;
    carouselInput.value = carouselStep;
  }
  track.style.transition = 'all 0s';
  for (let i = 0; i < carouselStep; i++) {
    track.prepend(track.lastElementChild);
  }
  track.style.transform = `translateX(-${
    carouselContainerWidth * carouselStep
  }px)`;
  setTimeout(() => {
    track.style = 'transform 1.8s';
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
  if (direction === -1) {
    let carouselStep = +carouselInput.value;
    if (carouselStep < 1 || carouselStep > 5) {
      carouselStep = 5;
      carouselInput.value = carouselStep;
    }
    track.style.transition = 'transform 0s';
    track.style.transform = `translateX(${0}px)`;
    for (let i = 0; i < carouselStep; i++) {
      track.appendChild(track.firstElementChild);
    }
    direction = 1;
  }
  setTimeout(() => {
    track.style = '';
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
popup_one.addEventListener('mousemove', (evt) => {
  let degX;
  let degY;
  // setInterval(() => {
  degY = Math.floor(
    (20 * (bodyWidth / 2 - evt.clientX)) / (popup_one.offsetWidth / 2)
  );
  degX = Math.floor(
    (-20 * (bodyHeight / 2 - evt.clientY)) / (popup_one.offsetHeight / 2)
  );
  // }, 30);
  // console.log('mov mouse', degX, degY);
  popup_one.style.transform = `perspective(600px) translate(0px, 0%) rotateY(${degY}deg) rotateX(${degX}deg)`;
});
popup_two.addEventListener('mousemove', (evt) => {
  let degX;
  let degY;
  // setInterval(() => {
  degY = Math.floor(
    (20 * (bodyWidth / 2 - evt.clientX)) / (popup_two.offsetWidth / 2)
  );
  degX = Math.floor(
    (-20 * (bodyHeight / 2 - evt.clientY)) / (popup_two.offsetHeight / 2)
  );
  // }, 30);
  // console.log('mov mouse', degX, degY);
  popup_two.style.transform = `perspective(600px) translate(0px, 0%) rotateY(${degY}deg) rotateX(${degX}deg)`;
});
popup_two.addEventListener('mouseleave', (evt) => {
  popup_two.style = '';
});
popup_one.addEventListener('mouseleave', (evt) => {
  popup_one.style = '';
});
