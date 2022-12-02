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
  710: {
    slidesPerView: 2,
  },
  320: {
    slidesPerView: 2.3,
    spaceBetween: 15,
  }
  }
  });

  //burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.header__nav-link');
let menuBot = document.querySelector('.header-bot__nav');
let menuBotLinks = menuBot.querySelectorAll('.header-bot__nav-link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  menuBot.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop--scroll');
})

menulinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    menuBot.classList.remove('header__nav--active');

    document.body.classList.remove('stop--scroll');
  })
})

menuBotLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    menuBot.classList.remove('header__nav--active');

    document.body.classList.remove('stop--scroll');
  })
})

  //search

let headerSearchBlock = document.querySelector('.header__search-block');
let btnOpen = document.querySelector('.header__search');
let btnSearchClose = document.querySelector('.header__search-btn');


btnOpen.addEventListener('click',
function() {
  headerSearchBlock.classList.add('header__search-block--active');
  //document.body.classList.add('stop--scroll');

})

btnSearchClose.addEventListener('click',
function() {
  headerSearchBlock.classList.remove('header__search-block--active');
  //document.body.classList.remove('stop--scroll');
})

  //320-btn

  let headerMid = document.querySelector('.header-bot__mid');
  let btn320 = document.querySelector('.header-bot__320-btn');
  let headerEarlier = headerMid.querySelectorAll('.header-bot__earlier');
  let btn320Close = document.querySelector('.header-bot__320-close')

  btn320.addEventListener('click',
  function() {
    headerMid.classList.add('header-bot__mid--active');
    btn320Close.classList.add('header-bot__320-close--active');
    document.body.classList.add('stop--scroll');
  })

  btn320Close.addEventListener('click',
  function() {
    headerMid.classList.remove('header-bot__mid--active');
    btn320Close.classList.remove('header-bot__320-close--active');
    document.body.classList.remove('stop--scroll');
  })

  //enter-block

let headerBlock = document.querySelector('.header__enter-block');
let btnEnter = document.querySelector('.header__enter');
let btnClose = document.querySelector('.header__enter-svg');
let darkBlock = document.querySelector('.header__dark-block');

btnEnter.addEventListener('click',
function() {
  headerBlock.classList.add('header__enter-block--active');
  document.body.classList.add('stop--scroll');
  darkBlock.classList.add('header__dark-block--active');
})

btnClose.addEventListener('click',
function() {
  headerBlock.classList.remove('header__enter-block--active');
  document.body.classList.remove('stop--scroll');
  darkBlock.classList.remove('header__dark-block--active');
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

