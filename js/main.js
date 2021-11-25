//lang-toggle
const langBtn = document.querySelector('.lang-btn');
const langToggle = document.querySelector('.lang-toggle');

langBtn.addEventListener('click', (e) => {
  e.preventDefault();
  langToggle.classList.toggle('active');
});

//recom-carousel toggle
const recomControl = document.querySelector('.recom-carousel-control');
const recomBtn = document.querySelector('.recom-carousel-control .open-btn');
const recomCont = document.querySelector('.recom-carousel-cont');

recomControl.addEventListener('click', (e) => {
  e.preventDefault();
  recomCont.classList.toggle('active');
  recomBtn.classList.toggle('active');
});

// match-service-tab
const matchItem = document.querySelectorAll('.match-service-tap .menu-item');

for (i = 0; i < matchItem.length; i++) {
  matchItem[i].addEventListener('click', (e) => {
    e.preventDefault();

    for (j = 0; j < matchItem.length; j++) {
      matchItem[j].classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
  });
}

// policy-infor-tab
const policyItem = document.querySelectorAll('.policy-infor-tab li');

for (i = 0; i < policyItem.length; i++) {
  policyItem[i].addEventListener('click', (e) => {
    e.preventDefault();

    for (j = 0; j < policyItem.length; j++) {
      policyItem[j].classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
  });
}
