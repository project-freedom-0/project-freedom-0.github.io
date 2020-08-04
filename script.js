/* for tabs */

var tabs = document.querySelectorAll('[data-tab-target]');
var tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(function(tab) {
  tab.addEventListener('click', () => {
  var target = document.querySelector(tab.dataset.tabTarget) 
  tabContent.forEach(tabContent => { tabContent.classList.remove('active')
  });
  target.classList.add('active')
  });
});



