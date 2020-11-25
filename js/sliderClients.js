let clientCallbackPosition
const clientCallbackContainer = document.querySelector('.client_callback_container')
const clientCallbackTrack = document.querySelector('.client_callback_slider_track')
const clientCallbackItems = document.querySelectorAll('.client_callback_slider_item')
const clientCallbackItemWidth = clientCallbackContainer.clientWidth
const clientCallbackSquares = document.querySelectorAll('.client_callback_slider_square')

clientCallbackItems.forEach((item) => {
  item.style.minWidth = `${clientCallbackItemWidth}px`
 })

 clientCallbackSquares.forEach((dotElem, dotIndex) => {
  dotElem.addEventListener('click', () => {
    checkForSquares(dotIndex)
  })
})

function checkForSquares(slideIndex) {
  clientCallbackPosition = 0;
  clientCallbackPosition -= slideIndex * clientCallbackItemWidth
  setClientCallbackPosition()
  clientCallbackSquares.forEach((dot, index) => {
    slideIndex === index ?
    dot.classList.add('slider_square_active') :
    dot.classList.remove('slider_square_active')
  })
}

const setClientCallbackPosition = () => {
  clientCallbackTrack.style.transform = `translateX(${clientCallbackPosition}px)`
}