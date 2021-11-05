const hamburgerBtn = document.querySelector('.hamburger-btn')
const primaryMenu = document.querySelector('.primary-menu')
const yearDiv = document.querySelector('.year')

const logo = document.querySelector('#Layer_1')
const intro = document.querySelector('.overlay1')
const para1 = document.querySelector('#Layer_2')
const para2 = document.querySelector('#Layer_3')


// wait half second
const oTl1 = setTimeout(() => {
  logo.classList.add('active')
}, 500)

// wait 11 seconds
const oTl2 = setTimeout(() => {
  gsap.to(logo, {opacity: 0, duration: 3, ease: 'linear', onComplete: () => {
    logo.remove()
  }})
}, 11000)

const oTl3 = setTimeout(() => {
  gsap.to(para1, {opacity: 1, duration: 5, ease: 'linear', onComplete: () => {
  }})
}, 14500)
const oTl4 = setTimeout(() => {
  gsap.to(para1, {opacity: 0, duration: 3, ease: 'linear', onComplete: () => {
    para1.remove()
  }})
}, 22000)

const oTl5 = setTimeout(() => {
  gsap.to(para2, {opacity: 1, duration: 5, ease: 'linear', onComplete: () => {
  }})
}, 25500)
const oTl6 = setTimeout(() => {
  gsap.to(para2, {opacity: 0, duration: 3, ease: 'linear', onComplete: () => {
    intro.remove()
    clearTimeout(oTl1, oTl2, oTl3, oTl4, oTl5, oTl6)
  }})
}, 33000)



hamburgerBtn.addEventListener('click', () => {
  primaryMenu.classList.toggle('show')
})


const s1Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.one-12',
      start: '10% bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s1Tl.to('.v-line1', {
    height: '40vh',
})
const s2Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2012-1',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
      ease: 'linear',
  }
})
s2Tl.to('.i2012-1', {
    y: '25vh',
})
const s3Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.two-12',
      start: '40% bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s3Tl.to('.h-line1', {
    width: '21vw',
})
const s4Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2012-2',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s4Tl.to('.i2012-2', {
    x: '5vw',
    scale: 1.1,
    y: '20vw',
})
const s5Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2012-4',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s5Tl.to('.i2012-4', {
  x: '-5vw',
  scale: 1.1,
  y: '20vw',
})

const s6Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.four-12',
      start: 'center bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s6Tl.to('.v-line2', {
    height: '30vh',
})
const s7Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2012-3',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s7Tl.to('.i2012-3', {
    y: '30vh',
})


const s8Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.one-13',
      start: '40% bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s8Tl.to('.h-line2', {
    width: '25vw',
})

const s9Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.one-13',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s9Tl.to('.i2013-2', {
    y: '30vh',
    x: '5vw',
})

const s10Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.three-13',
      start: '40% bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s10Tl.to('.h-line3', {
    width: '25vw',
})

const s11Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2013-1',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s11Tl.to('.i2013-1', {
    y: '30vh',
    scale: '1.1',
    x: '3vw'
})
const s12Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.four-13',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s12Tl.to('.v-line3', {
    height: '30vh',
})


const s13Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2014-1',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s13Tl.to('.i2014-1', {
    y: '30vh',
    x: '10vw'
})

const s14Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.two-14',
      start: '40% bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s14Tl.to('.h-line4', {
    width: '25vw',
})

const s15Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2014-2',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s15Tl.to('.i2014-2', {
    y: '30vh',
    x: '-10vw'
})


const s16Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.one-15',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s16Tl.to('.v-line4', {
    height: '30vh',
})
const s17Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2015-3',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s17Tl.to('.i2015-3', {
    y: '30vh',
})

const s18Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2015-2',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s18Tl.to('.i2015-2', {
    y: '30vh',
    scale: '1.1',
    x: '3vw'
})
const s19Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.two-15',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s19Tl.to('.v-line5', {
    height: '30vh',
})

const s20Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.three-15',
      start: 'top bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s20Tl.to('.h-line5', {
    width: '50vw',
})

const s21Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2015-1',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s21Tl.to('.i2015-1', {
    y: '30vh',
    x: '-10vw'
})

const s22Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.one-16',
      start: 'top bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s22Tl.to('.h-line6', {
    width: '40vw',
})

const s23Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.two-16',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s23Tl.to('.v-line6', {
    height: '22vh',
})
const s24Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2016-1',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s24Tl.to('.i2016-1', {
    y: '30vh',
})

const s25Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.three-16',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s25Tl.to('.v-line7', {
    height: '22vh',
})
const s26Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2016-2',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s26Tl.to('.i2016-2', {
    y: '30vh',
})

const s27Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.one-17',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s27Tl.to('.v-line8', {
    height: '35vh',
})
const s28Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2017-1',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s28Tl.to('.i2017-1', {
    y: '35vh',
})

const s29Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.two-17',
      start: 'top bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s29Tl.to('.h-line7', {
    width: '40vw',
})

const s30Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2017-2',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s30Tl.to('.i2017-2', {
    x: '5vw',
    scale: 1.1,
    y: '20vw',
})
const s31Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2017-3',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s31Tl.to('.i2017-3', {
  x: '-5vw',
  scale: 1.1,
  y: '20vw',
})

const s32Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.four-17',
      start: 'top bottom',
      end: '+=500vh',
      scrub: 0.3,
  }
})
s32Tl.to('.h-line8', {
    width: '25vw',
})

const s33Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2018-1',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s33Tl.to('.i2018-1', {
    y: '30vh',
    scale: 1.1,
})
const s34Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.two-18',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s34Tl.to('.v-line9', {
    height: '30vh',
})

const s35Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.i2018-2',
      start: '10% bottom',
      end: '+=500%',
      scrub: 0.3,
  }
})
s35Tl.to('.i2018-2', {
    y: '30vh',
    scale: 1.1,
})
const s36Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.four-18',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s36Tl.to('.v-line10', {
    height: '30vh',
})

const s37Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.one-19',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s37Tl.to('.v-line11', {
    height: '30vh',
})

const s38Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.two-19',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s38Tl.to('.v-line12', {
    height: '30vh',
})

const s39Tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.three-19',
      start: '40% bottom',
      end: '+=400vh',
      scrub: 0.3,
  }
})
s39Tl.to('.v-line13', {
    height: '30vh',
})


class BStar {
  constructor(size, x, y){
    this.size = size
    this.x = x
    this.y = y
    this.src = 'blue-star.png'
    this.create()
  }

  create(){
    const img = document.createElement('img')
    img.className = 'blue-star'  
    img.src = this.src    
    img.style.width = this.size+'px'
    img.style.height = this.size+'px'    
    img.style.position = 'absolute'    
    img.style.left = this.x+'px'
    img.style.top = this.y+'px'
    img.style.zIndex = '0'

    
    yearDiv.append(img)
  }
}


function isOdd(num) {
  return num % 2
}


function bStarGenerator(numStars = 100){

  for(let i = 0; i < numStars; i++){

    const size = Math.random()*7
    const x = Math.random()*yearDiv.clientWidth
    const y = Math.random()*yearDiv.clientHeight*1.45+550

    let aniDuration = Math.random()*9
    

    const star = new BStar(size, x, y)

  }
}

bStarGenerator(1000)

window.addEventListener('scroll', function(e) {
  const stars = this.document.querySelectorAll('.blue-star');
  var scrolled = window.pageYOffset;
  var rate = scrolled * 0.8;
  stars.forEach(star => {
    star.style.transform = 'translate3d(0px, '+rate+'px, 0px)'

  })
})


const slideA = document.querySelector('.slide-a')
const slideC = document.querySelector('.slide-c')
const slideE = document.querySelector('.slide-e')
const aImage = document.querySelector('#affect-image')

slideA.addEventListener("mouseover", function(){
  aImage.src = './affected-images/farm.jpg'
})
slideA.addEventListener("mouseout", function(){
  aImage.src = './affected-images/default.jpg'
})

slideC.addEventListener("mouseover", function(){
  aImage.src = './affected-images/community.jpg'
})
slideC.addEventListener("mouseout", function(){
  aImage.src = './affected-images/default.jpg'
})

slideE.addEventListener("mouseover", function(){
  aImage.src = './affected-images/ecosystems.jpg'
})
slideE.addEventListener("mouseout", function(){
  aImage.src = './affected-images/default.jpg'
})

const swiperBtns = document.querySelectorAll('.swiper-trigger')
swiperBtns.forEach(swiperBtn => {
  swiperBtn.addEventListener('click', () => {
    const selector = swiperBtn.getAttribute('data-swiper')
    showSwiper(selector)
  })
})

// show swiper
function showSwiper(selector){
  const swiper = document.querySelector(selector)
  swiper.style.bottom = '6vh'
}

// hide swiper
function hideSwiper(swiper){
  swiper.style.bottom = '-96.2vh'
}

// close swiper btn
const swiperCloseBtns = document.querySelectorAll('.swiper-close-btn')
swiperCloseBtns.forEach(swiperCloseBtn => {
  swiperCloseBtn.addEventListener('click', () => {
    const swiper = swiperCloseBtn.parentElement
    hideSwiper(swiper)
  })
})

const swiperA = new Swiper('.swiper-a', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  mousewheel: true,
  freeMode: true,
  slidesPerView: 0.39,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

const swiperC = new Swiper('.swiper-c', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  mousewheel: true,
  freeMode: true,
  slidesPerView: 0.55,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

const swiperE = new Swiper('.swiper-e', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  mousewheel: true,
  freeMode: true,
  slidesPerView: 0.42,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});