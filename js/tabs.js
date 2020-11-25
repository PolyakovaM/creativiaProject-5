const aboutTabs = document.querySelectorAll('.about_creativia_tab');
const aboutLinks = document.querySelectorAll('.about_creativia_tab_title');
const icons = document.querySelectorAll('.about_creativia_icon i');

aboutLinks.forEach((link, index) => {
  link.addEventListener('click', function() {
    selectedIndex(index)
  });
})

function selectedIndex(selectedIndex) {
  aboutTabs.forEach((elem, index) => {
    if (selectedIndex === index) {
      elem.classList.toggle('active_about_creativia_tab')
      selectedIndexIcons(selectedIndex, elem)
    } else {
      elem.classList.remove('active_about_creativia_tab')
    } 
  })
}

function selectedIndexIcons(selectIndex, elemLink) {
  icons.forEach((iconElem, iconIndex) => {
    if (selectIndex === iconIndex && elemLink.classList.contains('active_about_creativia_tab')) {
      iconElem.classList.remove('fas', 'fa-plus-circle')
      iconElem.classList.add('fas', 'fa-minus-circle')
    } else {
      iconElem.classList.remove('fas','fa-minus-circle')
      iconElem.classList.add('fas', 'fa-plus-circle')
    }
  })
}