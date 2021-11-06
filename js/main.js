//lang-toggle
const langBtn = document.querySelector('.lang-btn');
const langToggle = document.querySelector('.lang-toggle');

langBtn.addEventListener('click', () => {
  langToggle.classList.toggle('active');
});

// match-service-tab
const matchItem = document.querySelectorAll('.match-service-tap .menu-item');

function tabHandler() {
  for (i = 0; i < matchItem.length; i++) {
    matchItem[i].classList.add('active');
  }
}

for (i = 0; i < matchItem.length; i++) {
  matchItem[i].addEventListener('click', (e) => {
    for (j = 0; j < matchItem.length; j++) {
      matchItem[j].classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
  });
}
