let position = 0;
const slidesToScroll = 1;
const container = document.querySelector('.slider_title_cotainer')
const track = document.querySelector('.slider_title_track')
const btnPrev = document.querySelector('.left_arrow')
const btnNext = document.querySelector('.right_arrow')
const items = document.querySelectorAll('.slider_title')
const itemsCount = items.length;
const itemWidth = container.clientWidth
const movePosition = itemWidth
const dots = document.querySelectorAll('.header_slider_dot');
const headerContainer = document.querySelector('.header_slider')
let timer = setInterval(sliderChange, 3000)
let dotCounter = 0

items.forEach((item) => {
 item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + itemWidth) / itemWidth
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
  // if (itemsLeft === 0) position = 0
  setPosition()
  // sliderChecked(itemsLeft)
  dotCounter++;
  btnCheck()
  checkForTimerDots()
})

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
  // if (itemsLeft === 0) position -= itemWidth * (items.length - 1)
  setPosition()
  // sliderChecked(itemsLeft)
  btnCheck()
  dotCounter = itemsLeft - 1
  checkForTimerDots()
})

// const sliderChecked = (itemsLeftCheck) => {
//   track.style.transition = itemsLeftCheck === 0 ? '.1s' : '.7s'
// }

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
}

const btnCheck = () => {
  btnPrev.disabled = position === 0
  btnNext.disabled = position <= -(itemsCount - 1) * itemWidth
}

btnCheck()

function sliderMoveChecked() {
  const itemsLeft = itemsCount - (Math.abs(position) + itemWidth) / itemWidth
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
  if (!itemsLeft) {
    position = 0
  }
}

function onSliderMoveDotCheked() {
  dotCounter++
  if (!position) dotCounter = 0
  checkForTimerDots()
  console.log(dotCounter, 'slider');
}

function sliderChange() {
  sliderMoveChecked()
  onSliderMoveDotCheked()
  setPosition()
  btnCheck()
}

headerContainer.onmouseover = () => {
  if (timer) clearInterval(timer)
}

headerContainer.onmouseout = () => {
  timer = setInterval(sliderChange, 3000)
}

dots.forEach((dotElem, dotIndex) => {
  dotElem.addEventListener('click', () => {
    checkForDots(dotIndex)
    btnCheck()
  })
})

function checkForDots(slideIndex) {
  dotCounter = slideIndex
  position = 0
  position -= slideIndex * itemWidth
  setPosition()
  dots.forEach((dot, index) => {
    slideIndex === index ?
    dot.classList.add('header_slider_dot_active') :
    dot.classList.remove('header_slider_dot_active')
  })
}

function checkForTimerDots() {
  dots.forEach((dot, index) => {
    if (index !== dotCounter) {
      dot.classList.remove('header_slider_dot_active')
      return
    }
    dot.classList.add('header_slider_dot_active')
  })
}