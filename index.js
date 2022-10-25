let moreBtn = document.querySelector('.podcast__btn');
let podcastItem = document.querySelectorAll('.podcast__item');

moreBtn.addEventListener('click', () => {
  podcastItem.forEach(el => { el.classList.add('podcast__item--active')});
  moreBtn.closest('.podcast__bot-btn').classList.add('podcast__bot-btn--hidden');

})

const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false
});

$ (".guests__list").accordion();

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

//swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidePerGroup: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
  el: '.swiper-pagination',
  },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  breakpoints: {
  1441: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  }
  }
  });

  //burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.header__nav-link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop--scroll');
})

menulinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop--scroll');
  })
})


  //enter-block

let headerBlock = document.querySelector('.header__enter-block');
let btnEnter = document.querySelector('.header__enter');
let btnClose = document.querySelector('.header__enter-svg');


btnEnter.addEventListener('click',
function() {
  headerBlock.classList.add('header__enter-block--active');

})

btnClose.addEventListener('click',
function() {
  headerBlock.classList.remove('header__enter-block--active');
})

//play-pause

let headerBotBtn1 = document.querySelector('.header-bot__btn1');
let headerBotBtn2 = document.querySelector('.header-bot__btn2');
let headerBotClose1 = document.querySelector('.header-bot__btn-close1');
let headerBotClose2 = document.querySelector('.header-bot__btn-close2');

headerBotBtn1.addEventListener('click',
function() {
  headerBotBtn1.classList.add('header-bot__btn1--active');
  headerBotClose1.classList.add('header-bot__btn-close1--active');
})

headerBotClose1.addEventListener('click',
function() {
  headerBotBtn1.classList.remove('header-bot__btn1--active');
  headerBotClose1.classList.remove('header-bot__btn-close1--active');
})

headerBotBtn2.addEventListener('click',
function() {
  headerBotBtn2.classList.add('header-bot__btn1--active');
  headerBotClose2.classList.add('header-bot__btn-close1--active');
})

headerBotClose2.addEventListener('click',
function() {
  headerBotBtn2.classList.remove('header-bot__btn1--active');
  headerBotClose2.classList.remove('header-bot__btn-close1--active');
})

//podcast-play-pause

let playBtn = document.querySelector('.podcast__play');
let pauseBtn = document.querySelector('.podcast__pause');

playBtn.addEventListener('click',
function() {
  playBtn.classList.add('podcast__play--active');
  pauseBtn.classList.add('podcast__pause--active');
})

pauseBtn.addEventListener('click',
function() {
  playBtn.classList.remove('podcast__play--active');
  pauseBtn.classList.remove('podcast__pause--active');
})


let playBtn2 = document.querySelector('.podcast__play2');
let pauseBtn2 = document.querySelector('.podcast__pause2');

playBtn2.addEventListener('click',
function() {
  playBtn2.classList.add('podcast__play--active');
  pauseBtn2.classList.add('podcast__pause--active');
})

pauseBtn2.addEventListener('click',
function() {
  playBtn2.classList.remove('podcast__play--active');
  pauseBtn2.classList.remove('podcast__pause--active');
})


let playBtn3 = document.querySelector('.podcast__play3');
let pauseBtn3 = document.querySelector('.podcast__pause3');

playBtn3.addEventListener('click',
function() {
  playBtn3.classList.add('podcast__play--active');
  pauseBtn3.classList.add('podcast__pause--active');
})

pauseBtn3.addEventListener('click',
function() {
  playBtn3.classList.remove('podcast__play--active');
  pauseBtn3.classList.remove('podcast__pause--active');
})


let playBtn4 = document.querySelector('.podcast__play4');
let pauseBtn4 = document.querySelector('.podcast__pause4');

playBtn4.addEventListener('click',
function() {
  playBtn4.classList.add('podcast__play--active');
  pauseBtn4.classList.add('podcast__pause--active');
})

pauseBtn4.addEventListener('click',
function() {
  playBtn4.classList.remove('podcast__play--active');
  pauseBtn4.classList.remove('podcast__pause--active');
})


let playBtn5 = document.querySelector('.podcast__play5');
let pauseBtn5 = document.querySelector('.podcast__pause5');

playBtn5.addEventListener('click',
function() {
  playBtn5.classList.add('podcast__play--active');
  pauseBtn5.classList.add('podcast__pause--active');
})

pauseBtn5.addEventListener('click',
function() {
  playBtn5.classList.remove('podcast__play--active');
  pauseBtn5.classList.remove('podcast__pause--active');
})


let playBtn6 = document.querySelector('.podcast__play6');
let pauseBtn6 = document.querySelector('.podcast__pause6');

playBtn6.addEventListener('click',
function() {
  playBtn6.classList.add('podcast__play--active');
  pauseBtn6.classList.add('podcast__pause--active');
})

pauseBtn6.addEventListener('click',
function() {
  playBtn6.classList.remove('podcast__play--active');
  pauseBtn6.classList.remove('podcast__pause--active');
})


let playBtn7 = document.querySelector('.podcast__play7');
let pauseBtn7 = document.querySelector('.podcast__pause7');

playBtn7.addEventListener('click',
function() {
  playBtn7.classList.add('podcast__play--active');
  pauseBtn7.classList.add('podcast__pause--active');
})

pauseBtn7.addEventListener('click',
function() {
  playBtn7.classList.remove('podcast__play--active');
  pauseBtn7.classList.remove('podcast__pause--active');
})


let playBtn8 = document.querySelector('.podcast__play8');
let pauseBtn8 = document.querySelector('.podcast__pause8');

playBtn8.addEventListener('click',
function() {
  playBtn8.classList.add('podcast__play--active');
  pauseBtn8.classList.add('podcast__pause--active');
})

pauseBtn8.addEventListener('click',
function() {
  playBtn8.classList.remove('podcast__play--active');
  pauseBtn8.classList.remove('podcast__pause--active');
})


let playBtn9 = document.querySelector('.podcast__play9');
let pauseBtn9 = document.querySelector('.podcast__pause9');

playBtn9.addEventListener('click',
function() {
  playBtn9.classList.add('podcast__play--active');
  pauseBtn9.classList.add('podcast__pause--active');
})

pauseBtn9.addEventListener('click',
function() {
  playBtn9.classList.remove('podcast__play--active');
  pauseBtn9.classList.remove('podcast__pause--active');
})


let playBtn10 = document.querySelector('.podcast__play10');
let pauseBtn10 = document.querySelector('.podcast__pause10');

playBtn10.addEventListener('click',
function() {
  playBtn10.classList.add('podcast__play--active');
  pauseBtn10.classList.add('podcast__pause--active');
})

pauseBtn10.addEventListener('click',
function() {
  playBtn10.classList.remove('podcast__play--active');
  pauseBtn10.classList.remove('podcast__pause--active');
})


let playBtn11 = document.querySelector('.podcast__play11');
let pauseBtn11 = document.querySelector('.podcast__pause11');

playBtn11.addEventListener('click',
function() {
  playBtn11.classList.add('podcast__play--active');
  pauseBtn11.classList.add('podcast__pause--active');
})

pauseBtn11.addEventListener('click',
function() {
  playBtn11.classList.remove('podcast__play--active');
  pauseBtn11.classList.remove('podcast__pause--active');
})


let playBtn12 = document.querySelector('.podcast__play12');
let pauseBtn12 = document.querySelector('.podcast__pause12');

playBtn12.addEventListener('click',
function() {
  playBtn12.classList.add('podcast__play--active');
  pauseBtn12.classList.add('podcast__pause--active');
})

pauseBtn12.addEventListener('click',
function() {
  playBtn12.classList.remove('podcast__play--active');
  pauseBtn12.classList.remove('podcast__pause--active');
})

//validation

/*const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);
*/
const validation = new JustValidate('.we__form-main', {
  errorLabelStyle: {
    color: '#D52B1E',
  }
});

validation
  .addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Не короче 3 символов',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинное имя',
  },
])
  .addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Укажите ваш e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'Email не корректный!',
  }
])

