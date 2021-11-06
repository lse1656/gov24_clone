//lang-toggle
const langBtn = document.querySelector('.lang-btn');
const langToggle = document.querySelector('.lang-toggle');

langBtn.addEventListener('click', () => {
  langToggle.classList.toggle('active');
});

//recom-carousel toggle
// const recomBtn = document.querySelector('.recom-carousel-control');
// const recomCarousel = document.querySelector('.recom-carousel');

// recomBtn.addEventListener('click', () => {
//   recomCarousel.classList.toggle('active');
// });

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

// policy-infor-tab
const polictItem = document.querySelectorAll('.policy-infor-tab li');

function tabHandler() {
  for (i = 0; i < polictItem.length; i++) {
    polictItem[i].classList.add('active');
  }
}

for (i = 0; i < polictItem.length; i++) {
  polictItem[i].addEventListener('click', (e) => {
    for (j = 0; j < polictItem.length; j++) {
      polictItem[j].classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
  });
}
