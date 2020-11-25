const portfolioSpans = document.querySelectorAll('.portfolio_creativia_features_menu span');
const portfolioTabs = document.querySelectorAll('.tab_portfolio_creativia_features');

portfolioSpans.forEach((span, index) => {
  span.addEventListener('click', function() {
    checkSeletedIndex(portfolioSpans, index)
    checkSeletedIndex(portfolioTabs, index)
  });
})

function checkSeletedIndex(arr, selectedIndex) {
  arr.forEach((elem, index) => {
    selectedIndex === index ? elem.classList.add('portfolio_creativia_features_active')
    : elem.classList.remove('portfolio_creativia_features_active')
  })
}